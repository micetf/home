import * as thumbnail from "./thumbnails";

export const byId = {
    classetice: {
        id: "classetice",
        title: "Classe TICE",
        url: "https://classetice.fr/?lang=fr",
        description: "Les TICE au service des apprentissages et du B2I",
        thumbnail: thumbnail._CLASSE_TICE,
    },
    weblitoo: {
        id: "weblitoo",
        title: "Weblitoo",
        url: "https://weblitoo.net/favoris/",
        description: "Weblitoo",
        thumbnail: thumbnail._WEBLITOO,
    },
    clicouweb: {
        id: "clicouweb",
        title: "ClicouWeb",
        url: "https://clicouweb.net/",
        description: "Site sélectionné dans ClicouWeb",
        thumbnail: thumbnail._CLICOUWEB,
    },
    sitinstit: {
        id: "sitinstit",
        title: "SitInstit",
        url: "https://sitinstit.net/",
        description: "SitInstit",
        thumbnail: thumbnail._SITINSTIT,
    },
    lakanal: {
        id: "lakanal",
        title: "Lakanal",
        url: "https://lakanal.net/",
        description: "Lakanal",
        thumbnail: thumbnail._LAKANAL,
    },
    moustache: {
        id: "moustache",
        title: "Maternelle de Moustache",
        url: "https://jt44.free.fr/",
        description: "Maternelle de Moustache",
        thumbnail: thumbnail._MOUSTACHE,
    },
    instit90: {
        id: "instit90",
        title: "Instit90",
        url: "https://sylvain.obholtz.free.fr/",
        description: "",
        thumbnail: thumbnail._INSTIT90,
    },
    stephan: {
        id: "stephan",
        title: "Stepfan",
        url: "https://stepfan.free.fr/",
        description: "Stepfan",
        thumbnail: thumbnail._STEPFAN,
    },
    cartable: {
        id: "cartable",
        title: "Cartable.net",
        url: "https://cartables.net/index.html",
        description: "Cartable.net",
        thumbnail: thumbnail._CARTABLES,
    },
    soutien67: {
        id: "soutien67",
        title: "Soutien67",
        url: "https://soutien67.free.fr/",
        description: "Soutien67",
        thumbnail: thumbnail._SOUTIEN,
    },
    moncartable: {
        id: "moncartable",
        title: "Mon Cartable du Net",
        url: "https://mon-cartable-du-net.perso.sfr.fr/",
        description: "Mon Cartable du Net",
        thumbnail: thumbnail._CARTABLE,
    },
    monecole: {
        id: "monecole",
        title: "Mon école",
        url: "https://www.monecole.fr/",
        description: "",
        thumbnail: thumbnail._MONECOLE,
    },
    scalpa: {
        id: "scalpa",
        title: "SCALPA",
        url: "https://www.scalpa.info/",
        description: "www.scalpa.info",
        thumbnail: thumbnail._SCALPA,
    },
    chezmarco: {
        id: "chezmarco",
        title: "Chez Marco",
        url: "https://md87.ouvaton.org/",
        description: "Chez Marco",
        thumbnail: thumbnail._CHEZMARCO,
    },
    lespareils: {
        id: "lespareils",
        title: "Les petits dictionnaires des pareils",
        url: "https://www.pareils.free-h.net/",
        description: "Les petits dictionnaires des pareils",
        thumbnail: thumbnail._LESPAREILS,
    },
    astro52: {
        id: "astro52",
        title: "Astro52",
        url: "https://astro52.com/",
        description: "",
        thumbnail: thumbnail._ASTRO52,
    },
    logicieleducatif: {
        id: "logicieleducatif",
        title: "Logicieleducatif",
        url: "https://www.logicieleducatif.fr/",
        description: "Logicieleducatif",
        thumbnail: thumbnail._LOGICIELEDUCATIF,
    },
    "2a7": {
        id: "2a7",
        title: "2a7",
        url: "https://www.2a7.fr/",
        description: "2a7",
        thumbnail: thumbnail._2A7,
    },
    ideesash: {
        id: "ideesash",
        title: "Idées ASH",
        url: "https://sites.google.com/site/ideesash/",
        description: "Idées ASH",
        thumbnail: thumbnail._IDEESASH,
    },
    lasourisweb: {
        id: "lasourisweb",
        title: "lasouris-web",
        url: "https://www.lasouris-web.org/",
        description:
            "Répertoire de sites éducatifs pour les élèves du préscolaire et du primaire",
        thumbnail: thumbnail._LASOURISWEB,
    },
};

export const allIds = Object.keys(byId);

export default {
    byId,
    allIds,
};
