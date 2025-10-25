import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { usePageTracking } from '../hooks/useAnalytics';
import { useSEO } from '../utils/seo';
import { useTranslation } from 'react-i18next';

const RecipePage = () => {
  const { lang, uid, recipe_name } = useParams();
  const { t } = useTranslation();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  // Track page analytics
  usePageTracking('recipe_page', `Recipe: ${recipe_name} | Eat'Easy`);
  
  // SEO optimization for recipe page
  useSEO({
    title: recipe ? `${recipe.name} - Recipe | Eat'Easy` : `Recipe | Eat'Easy`,
    description: recipe ? `Learn how to make ${recipe.name}. Get the full recipe with ingredients and step-by-step instructions on Eat'Easy.` : 'Discover amazing recipes on Eat\'Easy',
    keywords: recipe ? `${recipe.name}, recipe, cooking, ingredients, ${recipe.prepTime || 'quick'}, ${recipe.category || 'delicious'}` : 'recipe, cooking, eat easy',
    type: 'article',
    image: imageUrl || '/eateasy-logo.png'
  });

  useEffect(() => {
    const fetchRecipeAndImage = async () => {
      console.log('🔄 Début fetchRecipeAndImage');
      try {
        // 1️⃣ Récupérer la recette Firestore
        const nameToMatch = recipe_name.replace(/_/g, ' ');
        console.log('➡️ nameToMatch (slug→nom) :', nameToMatch);

        const recipesRef = collection(db, 'UserReceipeV2', uid, 'receipes');
        const snap = await getDocs(recipesRef);
        console.log(`📄 ${snap.size} recettes trouvées pour l'UID ${uid}`);

        let matched = null;
        snap.forEach(docSnap => {
          const data = docSnap.data();
          const title = lang === 'fr'
            ? data.receipeFr?.name
            : data.receipeEn?.name;
          if (title?.toLowerCase() === nameToMatch.toLowerCase()) {
            matched = data;
            console.log('✅ Recette correspondante trouvée :', title);
          }
        });

        setRecipe(matched);

        // 2️⃣ Récupérer l’URL d’image dans RecipeImages
        if (matched?.receipeEn?.name) {
          const englishSlug = matched.receipeEn.name
            .toLowerCase()
            .replace(/ /g, '_');
          console.log('➡️ englishSlug pour RecipeImages :', englishSlug);

          const imageDocRef = doc(db, 'RecipeImages', englishSlug);
          const imageSnap = await getDoc(imageDocRef);

          if (imageSnap.exists()) {
            const imgData = imageSnap.data();
            console.log('✅ Document RecipeImages trouvé :', imgData);
            setImageUrl(imgData.url);           // ← ici on lit la clé "url"
            console.log('➡️ imageUrl set to:', imgData.url);
          } else {
            console.warn(`⚠️ Pas de doc RecipeImages pour "${englishSlug}"`);
          }
        } else {
          console.warn('⚠️ matched.receipeEn.name inexistant, pas d’appel image');
        }
      } catch (err) {
        console.error('❌ Erreur fetchRecipeAndImage :', err);
      } finally {
        console.log('🔚 Fin fetchRecipeAndImage');
        setLoading(false);
        setImageLoading(false);
      }
    };

    fetchRecipeAndImage();
  }, [lang, uid, recipe_name]);

  if (loading)
    return <div className="text-center p-6 text-lg">⏳ Chargement...</div>;
  if (!recipe)
    return <div className="text-center p-6 text-red-500">❌ Recette introuvable.</div>;

  const data = lang === 'fr' ? recipe.receipeFr : recipe.receipeEn;

  return (
    <main className="bg-[#FFF2DF] min-h-screen p-6">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6" itemScope itemType="https://schema.org/Recipe">
        {/* 🖼️ Image de recette */}
        {imageLoading ? (
          <div className="w-full h-64 bg-gray-100 animate-pulse rounded-xl mb-4" />
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt={`Image de ${data.name}`}
            className="w-full h-64 object-cover rounded-xl mb-4 shadow"
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500 rounded-xl mb-4">
            📷 Image non disponible
          </div>
        )}

        <h1 className="text-3xl font-bold text-[#57B031] mb-2" itemProp="name">{data.name}</h1>
        <p className="text-gray-600 mb-4 italic" itemProp="description">{data.description}</p>

        <div className="flex flex-wrap justify-between bg-[#F5A41C] text-white rounded-lg p-4 mb-6">
          <p><strong>Temps moyen :</strong> <span itemProp="totalTime">{data.averageTime}</span></p>
          <p><strong>Calories :</strong> <span itemProp="nutrition" itemScope itemType="https://schema.org/NutritionInformation"><span itemProp="calories">{data.totalCalories}</span></span></p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#F5A41C] mb-2">🛒 Ingrédients</h2>
          <ul className="list-disc list-inside space-y-1" itemProp="recipeIngredient">
            {data.ingredients?.map((it, i) => (
              <li key={i}>
                {lang === 'fr' && it.nameFr ? it.nameFr : it.name} –{' '}
                <span className="text-gray-700">{it.quantity}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#F5A41C] mb-2">👨‍🍳 Étapes</h2>
          <ol className="list-decimal list-inside space-y-3" itemProp="recipeInstructions">
            {data.steps?.map((step, i) => (
              <li
                key={i}
                className="bg-[#FFF2DF] border-l-4 border-[#57B031] p-3 rounded shadow-sm"
                itemProp="recipeInstruction"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <div className="font-medium" itemProp="text">{step.description}</div>
                <div className="text-sm text-gray-500">⏱️ <span itemProp="timeRequired">{step.duration}</span></div>
              </li>
            ))}
          </ol>
        </div>
      </article>
    </main>
  );
};

export default RecipePage;
