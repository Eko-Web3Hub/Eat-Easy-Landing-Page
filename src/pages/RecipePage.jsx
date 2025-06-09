import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const RecipePage = () => {
  const { lang, uid, recipe_name } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const nameToMatch = recipe_name.replace(/_/g, ' ');
        const recipesRef = collection(db, 'UserReceipeV2', uid, 'receipes');
        const querySnapshot = await getDocs(recipesRef);

        let matchedRecipe = null;

        querySnapshot.forEach((docSnap) => {
          const data = docSnap.data();
          const title = lang === 'fr' ? data.receipeFr?.name : data.receipeEn?.name;

          if (title?.toLowerCase() === nameToMatch.toLowerCase()) {
            matchedRecipe = data;
          }
        });

        setRecipe(matchedRecipe);
      } catch (error) {
        console.error("Erreur lors de la récupération de la recette :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [lang, uid, recipe_name]);

  if (loading) return <div className="text-center p-6 text-lg">⏳ Chargement...</div>;
  if (!recipe) return <div className="text-center p-6 text-red-500">❌ Recette introuvable.</div>;

  const recipeData = lang === 'fr' ? recipe.receipeFr : recipe.receipeEn;

  return (
    <div className="bg-[#FFF2DF] min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-[#57B031] mb-2">{recipeData.name}</h1>
        <p className="text-gray-600 mb-4 italic">{recipeData.description}</p>

        <div className="flex flex-wrap justify-between bg-[#F5A41C] text-white rounded-lg p-4 mb-6">
          <p><strong>Temps moyen :</strong> {recipeData.averageTime}</p>
          <p><strong>Calories :</strong> {recipeData.totalCalories}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#F5A41C] mb-2">🛒 Ingrédients</h2>
          <ul className="list-disc list-inside space-y-1">
            {recipeData.ingredients?.map((item, idx) => (
              <li key={idx}>
                {lang === 'fr' && item.nameFr ? item.nameFr : item.name} – <span className="text-gray-700">{item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#F5A41C] mb-2">👨‍🍳 Étapes</h2>
          <ol className="list-decimal list-inside space-y-3">
            {recipeData.steps?.map((step, idx) => (
              <li key={idx} className="bg-[#FFF2DF] border-l-4 border-[#57B031] p-3 rounded shadow-sm">
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
