# 🚲 AssurMyBike - L'Assurance Vélo Électrique Premium

![AssurMyBike Hero](src/assets/hero_bg.png)

Bienvenue sur le dépôt officiel de **AssurMyBike**. Une application moderne, rapide et accessible pour assurer votre vélo électrique en quelques clics.

## 🌟 Vision

AssurMyBike a été conçu pour offrir une expérience utilisateur fluide et rassurante ("Cardif Young"). Nous croyons que protéger sa mobilité doit être aussi simple que de rouler.

## ✨ Fonctionnalités Clés

*   **Tarification Instantanée** : Un algorithme transparent calcule votre prime en temps réel basée sur la valeur et l'âge du vélo.
*   **Souscription en 4 Étapes** : Un parcours guidé (wizard) qui vous prend par la main, du devis à la signature.
*   **Design Premium** : Une interface soignée (Glassmorphism, animations douces) qui respire la confiance.
*   **Espace Sinistre** : Déclarez un vol ou une casse en moins de 2 minutes.
*   **Bilingue Natif (i18n)** : Basculez instantanément entre Français et Anglais.
*   **100% Accessible (RGAA)** : Conforme aux normes d'accessibilité pour inclure tous les cyclistes.

## 🛠️ Stack Technique

Ce projet est propulsé par les dernières technologies web :

*   **Core** : [React](https://reactjs.org/) (v18) + [Vite](https://vitejs.dev/) (Build ultra-rapide)
*   **Routing** : `react-router-dom` pour une navigation SPA fluide.
*   **Internationalisation** : `i18next` & `react-i18next`.
*   **Qualité du Code** : ESLint configuré avec `jsx-a11y` pour garantir la conformité RGAA.
*   **Styles** : CSS Modules & Variables CSS pour un Design System cohérent et maintenable.

## 🚀 Installation et Démarrage

Pré-requis : Node.js (v16+) installé.

1.  **Cloner le projet**
    ```bash
    git clone https://github.com/sirhylle/assurmybike.git
    cd assurmybike
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```
    L'application sera accessible sur `http://localhost:5173`.

4.  **Builder pour la production**
    ```bash
    npm run build
    npm run preview
    ```

## 📁 Structure du Projet

```
src/
├── assets/          # Images, icones et vecteurs (SVG/PNG)
├── components/      # Composants réutilisables (Header, Footer, Layout...)
├── locales/         # Fichiers de traduction (fr.json, en.json)
├── pages/           # Vues principales (Home, Quote, Subscription, Claims)
├── utils/           # Logique métier (pricing.js)
├── App.jsx          # Point d'entrée et routing
├── index.css        # Variables globales et styles de base
└── main.jsx         # Injection React
```

## 🤝 Contribuer

Les contributions sont les bienvenues ! Pour des modifications majeures, veuillez ouvrir une issue d'abord pour discuter de ce que vous souhaitez changer.

1.  Forkez le projet
2.  Créez votre branche (`git checkout -b feature/AmazingFeature`)
3.  Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4.  Pushez sur la branche (`git push origin feature/AmazingFeature`)
5.  Ouvrez une Pull Request

## 📄 Licence

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

---

*Fait avec ❤️ pour les passionnés de vélo.*
