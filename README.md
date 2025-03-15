# MiCetF - Site Principal

Ce dépôt contient le code source du site principal de MiCetF, une collection d'outils pédagogiques pour l'école primaire.

## Fonctionnalités

-   Présentation de tous les outils disponibles sur MiCetF
-   Filtrage des outils par domaine (mathématiques, français, etc.)
-   Présentation des sites amis
-   Interface responsive adaptée à tous les appareils

## Prérequis

-   Node.js (version 14 ou supérieure)
-   npm ou yarn

## Installation

1. Clonez ce dépôt

```bash
git clone https://github.com/micetf/home.git
cd home
```

2. Installez les dépendances

```bash
npm install
# ou
yarn
```

3. Démarrez le serveur de développement

```bash
npm start
# ou
yarn start
```

## Architecture du projet

Ce projet utilise une architecture modulaire où les données (liste des outils, thumbnails, etc.) sont centralisées dans un package séparé appelé `micetf-data`.

-   **micetf-data** : Contient la liste des outils, des sites amis et les thumbnails
-   **home** (ce dépôt) : Site principal qui présente les outils
-   **outils** : Outil de recherche pour filtrer les outils par mot-clé

## Comment ajouter un nouvel outil

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

### 5. Tester et déployer

1. Testez que le nouvel outil apparaît correctement dans les deux projets
2. Déployez les mises à jour

## Développement

-   `npm start` : Lance le serveur de développement
-   `npm run build` : Génère une version de production
-   `npm run prebuild` : Copie les thumbnails depuis micetf-data (exécuté automatiquement avant build)

## Notes importantes

-   Ne modifiez jamais directement les fichiers dans `public/thumbnails` - ils sont générés automatiquement
-   Le dossier `dist` est ignoré par Git et ne doit pas être commité
-   Toute modification de la liste des outils doit être faite dans `micetf-data` pour maintenir la cohérence entre les projets

## Licence

MIT

## Contact

Pour toute question concernant ce projet, contactez [webmaster@micetf.fr](mailto:webmaster@micetf.fr)
