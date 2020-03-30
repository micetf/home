const email = [
    "mailto:",
    "webmaster",
    "@",
    "micetf.fr",
    "?",
    "subject=",
    "Au sujet de micetf.fr",
].join("");

export const brand = {
    className: "navbar-brand",
    href: "#",
    link: "MiCetF",
};

export const menu = [
    {
        className: "nav-link",
        href: "https://micetf.fr/outils/",
        title: "Recherche sur le site par mots clés",
        link: "Chercher un outil",
    },
    {
        className: "nav-link",
        href: "https://micetf.fr/index/",
        title: "Liste des outils rangés par ordre alphabétique",
        link: "Liste des outils",
    },
    {
        className: "nav-link",
        href: "https://micetf.fr/blog/",
        target: "_blank",
        link: "Blog",
    },
    {
        className: "nav-link",
        href: "https://www.youtube.com/user/MiCetF/videos",
        target: "_blank",
        title: "Chaîne Youtube",
        link: "Vidéos",
    },
    {
        className: "nav-link",
        href: email,
        title: "Pour contacter le webmaster...",
        link: "Contact",
    },
];

export const fm = {
    href: email,
    title: "Pour contacter le webmaster...",
};
