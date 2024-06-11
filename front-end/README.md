Project X
Project X est un réseau social simple où les utilisateurs peuvent se connecter, s'inscrire et voir des tweets en temps réel. Ce projet utilise React pour le frontend et Socket.IO pour la communication en temps réel.

Fonctionnalités
Project X offre plusieurs fonctionnalités :

Page d'accueil avec des tweets en temps réel
Connexion et inscription des utilisateurs avec Google OAuth
Navbar avec une barre de recherche
Footer avec des boutons de connexion et d'inscription
Animation pour l'affichage des boutons et du footer
Technologies utilisées
Les technologies utilisées dans ce projet sont les suivantes :

Frontend : React, Bootstrap
Backend : Node.js, Express, Socket.IO
Authentification : Google OAuth
Styles : CSS
Gestion de l'état : useState, useEffect
Installation
Pour installer et configurer ce projet, veuillez suivre les étapes ci-dessous :

Prérequis
Assurez-vous d'avoir installé Node.js et npm ou yarn sur votre machine.

Étapes
Clonez le dépôt et naviguez dans le répertoire du projet :
bash
Copier le code
git clone https://github.com/votre-utilisateur/project-x.git
cd project-x
Installez les dépendances pour le frontend :
bash
Copier le code
cd frontend
npm install
Installez les dépendances pour le backend :
bash
Copier le code
cd backend
npm install
Créez un fichier .env dans le répertoire backend et ajoutez vos variables d'environnement :
makefile
Copier le code
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_uri
Utilisation
Pour utiliser Project X, démarrez le frontend et le backend :

Démarrer le frontend
bash
Copier le code
cd frontend
npm start
Démarrer le backend
bash
Copier le code
cd backend
npm start
Le frontend sera disponible sur http://localhost:3000 et le backend sur http://localhost:5173.

Contribution
Les contributions sont les bienvenues ! Pour contribuer, veuillez suivre ces étapes :

Fork le projet
Créez votre branche de fonctionnalité (git checkout -b feature/FeatureName)
Committez vos modifications (git commit -m 'Add some FeatureName')
Poussez votre branche (git push origin feature/FeatureName)
Ouvrez une Pull Request
Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d'informations.