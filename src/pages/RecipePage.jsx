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

  if (loading) return <div>Chargement de la recette...</div>;
  if (!recipe) return <div>❌ Recette introuvable.</div>;

  const recipeData = lang === 'fr' ? recipe.receipeFr : recipe.receipeEn;

  return (
    <div style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{recipeData.name}</h1>
      <p><strong>Temps moyen :</strong> {recipeData.averageTime}</p>
      <p><strong>Calories :</strong> {recipeData.totalCalories}</p>
      <p style={{ marginTop: '1rem' }}>{recipeData.description}</p>

      <h2>Ingrédients</h2>
      <ul>
        {recipeData.ingredients?.map((item, idx) => (
          <li key={idx}>
            {lang === 'fr' && item.nameFr ? item.nameFr : item.name} – {item.quantity}
          </li>
        ))}
      </ul>

      <h2>Étapes</h2>
      <ol>
        {recipeData.steps?.map((step, idx) => (
          <li key={idx} style={{ marginBottom: '0.5rem' }}>
            <strong>Étape {idx + 1} :</strong> {step.description} <em>({step.duration})</em>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RecipePage;
