import friends from "./config/friends";
import tools from "./config/tools";
export const domaines = [
    {
        name: "maths",
        label: "Maths",
        href: "#",
    },
    {
        name: "français",
        label: "Français",
        href: "#",
    },
    {
        name: "générateur",
        label: "Générateurs",
        href: "#",
    },
    {
        name: "divers",
        label: "Autres",
        href: "#",
    },
    {
        name: "amis",
        label: "Sites amis",
        href: "#",
    },
];
export const cards = {
    amis: friends.allIds.map(id => friends.byId[id]),
    outils: tools.allIds.map(id => tools.byId[id]),
};

export const amis = cards.amis;
export const outils = (domaine = undefined) =>
    domaine
        ? cards.outils.filter(card => card.keywords.find(kw => domaine === kw))
        : cards.outils;
