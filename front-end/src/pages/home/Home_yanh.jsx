import React from 'react';
import '../../style/home.css';
import logo from '../../assets/logo.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <img src={logo} alt="Logo" className="home-logo" />
        <h1>Tout en temps réel</h1>
        <p>Prêt à rejoindre les autres sur Y..AM ?</p>
      </div>
      <div className="home-content">
        <div className="home-tweets">
          <div className="tweet">
            <p>J'aime les gens et leurs odeurs</p>
            <p>@Yanh</p>
          </div>
          <div className="tweet">
            <p>Recherche joueur pour 1v1 sur SF6</p>
            <p>@Axel234</p>
          </div>
          <div className="tweet">
            <p>Я роблю тест</p>
            <p>@Manja2012</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
