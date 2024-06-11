import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/footer.css';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className={`footer ${showFooter ? 'visible' : ''}`}>
      <div className={`footer-text ${showFooter ? 'visible' : ''}`}>
        Ne manquez rien de ce qui se passe
      </div>
      <div className="footer-content">
        <Link to="/login" className={`btn btn-primary ${showFooter ? 'visible' : ''}`}>Connexion</Link>
        <Link to="/register" className={`btn btn-primary ${showFooter ? 'visible' : ''}`}>S'inscrire</Link>
      </div>
    </footer>
  );
};

export default Footer;
