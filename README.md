# MiCetF - Des Outils Pour la Classe

MiCetF est une collection d'outils pédagogiques pour l'école primaire développée par Frédéric MISERY.

## 🎯 Présentation

Ce dépôt contient le code source du site principal de MiCetF, une plateforme qui propose de nombreux outils pédagogiques destinés principalement aux enseignants et élèves de l'école primaire.

## 🚀 Installation

### Prérequis

-   Node.js (version 16 ou supérieure)
-   npm ou yarn

### Étapes d'installation

1. Clonez ce dépôt :

```bash
git clone https://github.com/votre-nom/home.git
cd home
```

2. Installation du package micetf-data :

Le projet dépend d'un package externe `micetf-data` qui contient les données des outils et leurs miniatures. Vous pouvez l'installer de deux façons :

**Option A - Utiliser la version publiée :**

```bash
# Installation directe depuis le dépôt GitHub avec une version spécifique
npm install github:micetf/micetf-data#v1.0.10
```

**Option B - Développement local :**
Si vous souhaitez modifier les données localement :

```bash
# 1. Clonez le dépôt micetf-data en parallèle
git clone https://github.com/micetf/micetf-data.git ../micetf-data

# 2. Installez les dépendances dans ce dépôt
cd ../micetf-data
npm install

# 3. Revenez au projet principal et liez le package localement
cd ../home
npm link ../micetf-data
```

3. Installez les dépendances du projet principal :

```bash
npm install
```

4. Démarrez le serveur de développement :

```bash
npm run dev
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

5. Pour générer une version de production :

```bash
npm run build
```

Le script `prebuild` s'exécutera automatiquement pour copier les assets nécessaires depuis `micetf-data`.

## 🏗️ Architecture du projet

### Stack technique

-   **React 18** : Composants fonctionnels avec hooks
-   **Tailwind CSS** : Framework CSS utility-first pour le design
-   **Vite** : Outil de build moderne pour une expérience de développement optimale

### Structure des données

Le projet est organisé en trois packages distincts :

-   **micetf-data** : Package contenant les données des outils et les thumbnails
-   **home** (ce dépôt) : Site principal qui présente les outils par catégorie
-   **outils** : Interface de recherche avancée (dépôt séparé)

### Fonctionnement de micetf-data

Le package `micetf-data` fournit :

1. **Données structurées** :

    - Liste des outils (`outils()`)
    - Domaines (`domaines`)
    - Sites amis (`amis`)

2. **Assets** :

    - Miniatures des outils (`thumbnails/`)
    - Script de copie des assets (`scripts/copy-assets.js`)

3. **Helpers** :
    - Fonctions utilitaires comme `getFullThumbnailPath()`

## 🧩 Structure des composants

```
src/
├── components/
│   ├── About/            # Informations sur le projet
│   ├── Cards/            # Affichage des cartes d'outils
│   │   ├── Card.jsx      # Composant de carte individuelle
│   │   ├── CardBody.jsx  # Corps de la carte
│   │   └── index.jsx     # Conteneur des cartes
│   ├── Navbar/           # Barre de navigation
│   ├── Pagination/       # Navigation entre domaines
│   └── ScrollButton/     # Bouton de retour en haut
├── App.jsx               # Composant principal
└── main.jsx              # Point d'entrée
```

## 🔄 Workflow de développement

1. **Modification des données** :

    - Toute modification des outils doit être faite dans le package `micetf-data`
    - Après modifications, mettre à jour la version dans `package.json` de micetf-data
    - Créer un tag Git pour la nouvelle version : `git tag v1.0.X && git push origin v1.0.X`

2. **Mise à jour des dépendances** :

    - Mettre à jour la référence dans le projet principal : `npm install github:micetf/micetf-data#v1.0.X`

3. **Développement UI** :

    - Modifier les composants React dans `src/components/`
    - Utiliser les classes Tailwind pour le styling
    - Tester avec `npm run dev`

4. **Production** :
    - Générer la build avec `npm run build`
    - Les assets seront automatiquement copiés depuis micetf-data

## 📋 Scripts disponibles

-   `npm run dev` : Lance le serveur de développement
-   `npm run build` : Génère une version de production (exécute prebuild automatiquement)
-   `npm run prebuild` : Copie les assets depuis micetf-data (exécuté automatiquement avant build)
-   `npm run preview` : Prévisualise la version de production

## 📝 Notes importantes

-   La variable d'environnement `VITE_THUMBNAILS_PREFIX` gère le préfixe des chemins d'images
-   En production, les miniatures sont servies depuis `/home/thumbnails/`
-   En développement, elles sont servies depuis `./thumbnails/`

## 📧 Contact

Pour toute question concernant ce projet, contactez [webmaster@micetf.fr](mailto:webmaster@micetf.fr)
