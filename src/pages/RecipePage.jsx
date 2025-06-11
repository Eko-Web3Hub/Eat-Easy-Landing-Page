import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const RecipePage = () => {
  const { lang, uid, recipe_name } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

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
    <div className="bg-[#FFF2DF] min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
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

        <h1 className="text-3xl font-bold text-[#57B031] mb-2">{data.name}</h1>
        <p className="text-gray-600 mb-4 italic">{data.description}</p>

        <div className="flex flex-wrap justify-between bg-[#F5A41C] text-white rounded-lg p-4 mb-6">
          <p><strong>Temps moyen :</strong> {data.averageTime}</p>
          <p><strong>Calories :</strong> {data.totalCalories}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#F5A41C] mb-2">🛒 Ingrédients</h2>
          <ul className="list-disc list-inside space-y-1">
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
          <ol className="list-decimal list-inside space-y-3">
            {data.steps?.map((step, i) => (
              <li
                key={i}
                className="bg-[#FFF2DF] border-l-4 border-[#57B031] p-3 rounded shadow-sm"
              >
                <div className="font-medium">{step.description}</div>
                <div className="text-sm text-gray-500">⏱️ {step.duration}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
