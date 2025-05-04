// src/pages/DeleteAccount.jsx

import React, { useState } from 'react';
import { signInWithEmailAndPassword, deleteUser } from 'firebase/auth';
import { firebaseApp, auth } from '../firebase'; // Import depuis le fichier de configuration

const DeleteAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      // Réauthentification de l'utilisateur
      await signInWithEmailAndPassword(auth, email, password);
      
      // Suppression de l'utilisateur
      const user = auth.currentUser;
      await deleteUser(user);
      
      setSuccess('Votre compte a été supprimé avec succès.');
      setEmail('');
      setPassword('');
    } catch (err) {
      // Gestion des erreurs Firebase
      switch (err.code) {
        case 'auth/wrong-password':
          setError('Mot de passe incorrect.');
          break;
        case 'auth/user-not-found':
          setError('Aucun compte trouvé avec cet email.');
          break;
        case 'auth/too-many-requests':
          setError('Trop de tentatives. Veuillez réessayer plus tard.');
          break;
        default:
          setError('Une erreur est survenue. Veuillez réessayer.');
          console.error('Erreur Firebase:', err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-body flex items-center justify-center p-4">
      <div className="bg-card p-8 rounded-xl shadow-custom max-w-md w-full">
        <h2 className="text-2xl font-bold text-darkest mb-4 text-center">
          Supprimer votre compte
        </h2>
        <div className="text-center text-sm text-darkest bg-red-100 p-3 rounded-lg mb-5">
          <p className="text-darkest text-sm md:text-base mb-2">
            La suppression de votre compte est irréversible. Toutes vos données, y compris vos recettes et préférences, seront définitivement effacées.
          </p>
          <span className="font-semibold">Attention :</span> Cette action ne peut pas être annulée.
        </div>
        <p className="text-center text-darkest text-sm md:text-base mb-4 mt-5">
          Pour confirmer la suppression du compte, veuillez entrer votre adresse email et votre mot de passe.
        </p>
        {error && (
          <div className="text-center text-sm text-darkest bg-red-200 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}
        {success && (
          <div className="text-center text-sm text-darkest bg-green-100 p-3 rounded-lg mb-4">
            {success}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre.email@exemple.com"
              className="bg-white p-3 pl-5 rounded-xl border-2 focus:outline-none focus:border-2 focus:border-secondary w-full text-sm md:text-base"
              required
            />
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              className="bg-white p-3 pl-5 rounded-xl border-2 focus:outline-none focus:border-2 focus:border-secondary w-full text-sm md:text-base"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-secondary text-black px-6 py-2 rounded-lg hover:bg-secondary/90"
            >
              Supprimer le compte
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-darkest mt-6">
          Besoin d'aide ?{' '}
          <a
            href="mailto:eateasyhub@gmail.com"
            className="text-primary hover:underline"
          >
            Contactez notre support
          </a>
        </p>
      </div>
    </div>
  );
};

export default DeleteAccount;