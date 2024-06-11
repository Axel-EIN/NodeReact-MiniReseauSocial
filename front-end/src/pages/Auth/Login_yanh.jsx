import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import '../../style/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleSuccess = (response) => {
    console.log('Google login success:', response);
    
  };

  const handleGoogleFailure = (error) => {
    console.error('Google login error:', error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (email === 'user@example.com' && password === 'password') {
    
      console.log('Connexion réussie');
    } else {
      setError('Adresse e-mail ou mot de passe incorrect');
    }
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="login-container">
        <h1>Connectez-vous !</h1>
        <form onSubmit={handleSubmit} className="login-form">
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
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">Se connecter</button>
        </form>
        <div className="additional-links">
          <Link to="/register">S'inscrire</Link>
          <span> | </span>
          <Link to="/forgot-password">Mot de passe oublié ?</Link>
        </div>
        <div className="google-login-button">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            buttonText="Se connecter avec Google"
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
