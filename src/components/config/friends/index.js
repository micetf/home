import * as thumbnail from "./thumbnails";

export const byId = {
    classetice: {
        id: "classetice",
        title: "Classe TICE",
        url: "https://classetice.fr/?lang=fr",
        description:
            "Portail des usages du numérique pour le premier degré, ce site a pour vocation de recenser et mutualiser des activités, des ressources et des outils numériques au service des disciplines de l’école primaire.",
        thumbnail: thumbnail._CLASSE_TICE,
    },
    weblitoo: {
        id: "weblitoo",
        title: "Weblitoo",
        url: "https://weblitoo.net/favoris/",
        description: `Proposé par l'association PragmaTICE, ce site s’adresse aux élèves de cycle 3 et à leurs enseignants, qui peuvent en complément de l’annuaire collaboratif, créer leurs propres pages de liens via un espace "Ma classe".`,
        thumbnail: thumbnail._WEBLITOO,
    },
    clicouweb: {
        id: "clicouweb",
        title: "ClicouWeb",
        url: "https://clicouweb.net/",
        description:
            "Proposé par l'association PragmaTICE, ce site s'adresse aux élèves des cycles 1 & 2. Les sites référencés sont classés en 7 catégories selon les programmes 2008 de l'Education Nationale.",
        thumbnail: thumbnail._CLICOUWEB,
    },
    lakanal: {
        id: "lakanal",
        title: "Lakanal",
        url: "https://lakanal.net/",
        description:
            "lakanal.net : site international de quartier. Ressources et outils pour le cycle 2 : GS - CP - CE1. Enseignant (suivant les années) en CP / CE1 / CE2 )",
        thumbnail: thumbnail._LAKANAL,
    },
    moustache: {
        id: "moustache",
        title: "Maternelle de Moustache",
        url: "http://www.lamaternelledemoustache.net/",
        description:
            "Les enseignants trouveront ici des outils et des ressources pour l'école maternelle. Ni modèles, ni recettes, seulement quelques idées pour dépanner ou gagner du temps.",
        thumbnail: thumbnail._MOUSTACHE,
    },
    soutien67: {
        id: "soutien67",
        title: "Soutien67",
        url: "https://soutien67.fr/",
        description: `Soutien scolaire gratuit - Ressources pour l'école élémentaire - Activités en ligne - Cours en ligne - Fiches imprimables.  Niveaux : CP - CE1 - CE2 - CM1 - CM2. Domaines : Mathématiques - Français - Histoire - Géographie - Sciences`,
        thumbnail: thumbnail._SOUTIEN,
    },
    instit90: {
        id: "instit90",
        title: "Instit90",
        url: "http://sylvain.obholtz.free.fr",
        description:
            "Ce site est destiné aux professionnels de l'éducation, mais pourquoi pas aussi... aux parents de mes élèves !",
        thumbnail: thumbnail._INSTIT90,
    },
    monecole: {
        id: "monecole",
        title: "Mon école",
        url: "https://www.monecole.fr/",
        description:
            "Mon école | Plateforme pédagogique pour l'enseignant et ses élèves",
        thumbnail: thumbnail._MONECOLE,
    },
    scalpa: {
        id: "scalpa",
        title: "SCALPA",
        url: "https://www.scalpa.info/",
        description:
            "Vous trouverez sur ce site de nombreuses ressources pour l'école primaire.  : des leçons de grammaire, orthographe, conjugaison, accompagnées de matériels didatiques, Des logiciels simples de manipulation pour travailler des compétences en calcul mental, pour l'apprentissage des tables... La plupart d'entre eux permettent aussi de générer des exercices imprimables, ...",
        thumbnail: thumbnail._SCALPA,
    },
    chezmarco: {
        id: "chezmarco",
        title: "Chez Marco",
        url: "https://md87.ouvaton.org/",
        description:
            "Chez Marco - Outils pour le CP avec aussi de vrais morceaux de numérique...",
        thumbnail: thumbnail._CHEZMARCO,
    },
    lespareils: {
        id: "lespareils",
        title: "Les petits dictionnaires des pareils",
        url: "http://www.pareils.fr/",
        description: "Du pareil au même, sur les chemins de l'abstraction...",
        thumbnail: thumbnail._LESPAREILS,
    },
    astro52: {
        id: "astro52",
        title: "Astro52",
        url: "https://astro52.com/",
        description:
            "Ressources pédagogiques pour l'école primaire : Logiciels, fiches, formation des enseignants.",
        thumbnail: thumbnail._ASTRO52,
    },
    logicieleducatif: {
        id: "logicieleducatif",
        title: "Logicieleducatif",
        url: "https://www.logicieleducatif.fr/",
        description:
            "Le site logicieleducatif.fr a pour objectif d'aider les élèves dans leurs apprentissages scolaires, grâce à des jeux éducatifs. Les jeux sont jouables en ligne, ils sont tous gratuits et aucune installation ni inscription n'est nécessaire. Tous les jeux ont été conçus par un enseignant spécialisé et formateur TUIC (Technique Usuelle de l'Information et de la Communication). D'autres enseignants (et techniciens) apportent régulièrement leur contribution.",
        thumbnail: thumbnail._LOGICIELEDUCATIF,
    },
    ideesash: {
        id: "ideesash",
        title: "Idées ASH",
        url: "https://sites.google.com/site/ideesash/",
        description:
            "Adaptations scolaires et Scolarisation des élèves porteurs de Handicap. Ce site témoigne de la réflexion d'un maître E sur ses pratiques, de ses remises en question, de Son cheminement professionnel et des valeurs qui sont les siennes.",
        thumbnail: thumbnail._IDEESASH,
    },
    lasourisweb: {
        id: "lasourisweb",
        title: "lasouris-web",
        url: "https://www.lasouris-web.org/",
        description:
            "Répertoire de sites éducatifs pour les élèves du préscolaire et du primaire. Le site lasouris-web vous propose des liens vers des sites, des exercices en ligne et des jeux éducatifs gratuits pour les élèves du préscolaire, du primaire et du secondaire.",
        thumbnail: thumbnail._LASOURISWEB,
    },
};

export const allIds = Object.keys(byId);

export default {
    byId,
    allIds,
};
