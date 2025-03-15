# MiCetF

MiCetF est une collection d'outils pédagogiques pour l'école primaire développée par Frédéric MISERY.

## 🎯 Présentation

Ce dépôt contient le code source du site principal de MiCetF, une plateforme qui propose de nombreux outils pédagogiques destinés principalement aux enseignants et élèves de l'école primaire.

### Fonctionnalités

-   📚 Présentation des outils pédagogiques organisés par domaines :
    -   Mathématiques
    -   Français
    -   Générateurs
    -   Divers
    -   Sites amis
-   🔍 Filtrage des outils par domaine
-   📱 Interface responsive adaptée à tous types d'appareils
-   🌐 Intégration avec les sites amis et partenaires

## 🚀 Installation

### Prérequis

-   Node.js (version 16 ou supérieure)
-   npm ou yarn

### Étapes d'installation

1. Clonez ce dépôt :

```bash
git clone https://github.com/micetf/home.git
cd home
```

2. Installez les dépendances :

```bash
npm install
# ou
yarn
```

3. Démarrez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible à l'adresse [http://localhost:5173](http://localhost:5173).

## 🏗️ Architecture du projet

Ce projet utilise une architecture modulaire où les données (liste des outils, thumbnails, etc.) sont centralisées dans un package séparé appelé `micetf-data`.

### Structure principale

-   **micetf-data** : Package contenant la liste des outils, des sites amis et les thumbnails
-   **home** (ce dépôt) : Site principal qui présente les outils
-   **outils** : Outil de recherche avancé pour filtrer les outils par mot-clé

### Stack technique

-   **React** : Bibliothèque UI pour le développement de composants
-   **Tailwind CSS** : Framework CSS utility-first pour le design
-   **Vite** : Outil de build moderne pour une expérience de développement optimale

## 🧩 Structure des fichiers

```
micetf/
├── public/              # Fichiers statiques
│   ├── thumbnails/      # Images des outils (générées automatiquement)
│   └── index.html       # Page HTML principale
├── src/
│   ├── components/      # Composants React
│   │   ├── About/       # Informations sur le projet
│   │   ├── Cards/       # Affichage des cartes d'outils
│   │   ├── Navbar/      # Barre de navigation
│   │   ├── Pagination/  # Navigation entre les domaines
│   │   └── App.jsx      # Composant principal
│   ├── data/            # Données centralisées (via micetf-data)
│   ├── index.css        # Styles globaux
│   └── main.jsx         # Point d'entrée de l'application
└── package.json         # Dépendances et scripts
```

## 🛠️ Comment ajouter un nouvel outil

L'ajout d'un nouvel outil se fait entièrement dans le package `micetf-data`. Voici la démarche à suivre :

### 1. Préparer la thumbnail

1. Créez une capture d'écran de l'outil (taille recommandée : 300x200px)
2. Enregistrez l'image au format PNG
3. Nommez l'image de manière descriptive (ex: `mon-nouvel-outil.png`)
4. Placez l'image dans le dossier `assets/thumbnails` du dépôt `micetf-data`

### 2. Ajouter l'outil à la liste

1. Ouvrez le fichier `src/data/tools.js` du dépôt `micetf-data`
2. Ajoutez un nouvel objet à la liste des outils en suivant ce modèle :

```javascript
{
    id: "mon-nouvel-outil", // identifiant unique, généralement l'URL de l'outil
    title: "Mon Nouvel Outil", // titre affiché sur le site
    url: "mon-nouvel-outil", // URL de l'outil (sans le domaine)
    description: "Description détaillée de l'outil et de son utilité pédagogique.",
    thumbnail: "mon-nouvel-outil.png", // nom du fichier image
    keywords: ["maths", "géométrie", "cycle 3"], // mots-clés pour le filtrage
},
```

### 3. Mettre à jour la version du package

1. Mettez à jour le numéro de version dans `package.json` du dépôt `micetf-data`
2. Committez et poussez vos modifications
3. Créez un tag pour la nouvelle version

```bash
git tag v1.0.X
git push origin v1.0.X
```

### 4. Mettre à jour la dépendance dans les projets

Dans les projets `home` et `outils`, mettez à jour la dépendance vers `micetf-data` :

```bash
npm install github:micetf/micetf-data#v1.0.X
# ou
yarn add github:micetf/micetf-data#v1.0.X
```

## 🔄 Gestion des données

Les données utilisées par l'application sont centralisées dans le package `micetf-data`, qui fournit :

-   La liste des outils (`tools.js`)
-   Les domaines (`domaines.js`)
-   Les sites amis (`friends.js`)
-   Les miniatures des outils (`assets/thumbnails/`)

Cette architecture permet de maintenir les données cohérentes entre les différents projets de l'écosystème MiCetF.

## 📋 Scripts disponibles

-   `npm run dev` : Lance le serveur de développement
-   `npm run build` : Génère une version de production
-   `npm run preview` : Prévisualise la version de production

## 📝 Notes importantes

-   Ne modifiez jamais directement les fichiers dans `public/thumbnails` - ils sont générés automatiquement
-   Le dossier `dist` est ignoré par Git et ne doit pas être commité
-   Toute modification de la liste des outils doit être faite dans `micetf-data` pour maintenir la cohérence entre les projets

## 📄 Licence

MIT

## 📧 Contact

Pour toute question concernant ce projet, contactez [webmaster@micetf.fr](mailto:webmaster@micetf.fr)
