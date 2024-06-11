import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import '../../style/register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleSuccess = (response) => {
    console.log('Google login success:', response);
    // Traitez la réponse de Google, par exemple, en envoyant le token au backend pour validation
  };

  const handleGoogleFailure = (error) => {
    console.error('Google login error:', error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier les informations d'inscription ici (par exemple, via une requête au backend)
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
    } else {
      // Envoyez les informations d'inscription au backend et gérez la réponse
      console.log('Informations d\'inscription valides:', { email, password });
    }
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="register-container">
        <h1>Inscription à Projet X</h1>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="register-button">S'inscrire</button>
        </form>
        <div className="additional-links">
          <Link to="/login">Déjà inscrit ? Se connecter</Link>
        </div>
        <div className="google-login-button">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            buttonText="S'inscrire avec Google"
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Register;
