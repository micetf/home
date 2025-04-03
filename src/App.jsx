import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NavbarSpacer from "./components/Navbar/NavbarSpacer";
import Pagination from "./components/Pagination";
import Cards from "./components/Cards";
import ScrollButton from "./components/ScrollButton";
import About from "./components/About";
import { outils, amis } from "micetf-data";

/**
 * Composant principal de la page d'accueil
 * Affiche les cartes d'outils selon le domaine sélectionné
 * @returns {JSX.Element} Composant App
 */
function App() {
    const [domaine, setDomaine] = useState("maths");

    // Récupération des cartes et tri par ordre alphabétique du titre
    const getCardsAlphabetically = () => {
        const cardsData = domaine !== "amis" ? outils(domaine) : amis;

        // Fonction pour obtenir la clé de tri
        const getSortKey = (title) => {
            // Vérifie si le titre commence par un nombre
            const startsWithNumberRegex = /^(\d+)[\s-]/;
            const match = title.match(startsWithNumberRegex);

            if (match) {
                // Convertit le nombre en texte pour le tri
                const num = parseInt(match[1]);
                const numWords = {
                    1: "un",
                    2: "deux",
                    3: "trois",
                    4: "quatre",
                    5: "cinq",
                    6: "six",
                    7: "sept",
                    8: "huit",
                    9: "neuf",
                    10: "dix",
                    11: "onze",
                    12: "douze",
                    13: "treize",
                    14: "quatorze",
                    15: "quinze",
                    16: "seize",
                    17: "dix-sept",
                    18: "dix-huit",
                    19: "dix-neuf",
                    20: "vingt",
                    30: "trente",
                    40: "quarante",
                    50: "cinquante",
                    60: "soixante",
                    70: "soixante-dix",
                    80: "quatre-vingts",
                    90: "quatre-vingt-dix",
                    100: "cent",
                };

                // Gestion des nombres composés
                let textNum;
                if (num <= 20 || numWords[num]) {
                    textNum = numWords[num] || `nombre-${num}`;
                } else {
                    // Décomposition pour les nombres plus grands
                    const tens = Math.floor(num / 10) * 10;
                    const units = num % 10;
                    if (units === 0) {
                        textNum = numWords[tens];
                    } else {
                        textNum = `${numWords[tens]}-${numWords[units]}`;
                    }
                }

                // Remplace le nombre par sa version textuelle
                return textNum + title.substring(match[0].length);
            }
            return title;
        };

        // Tri par ordre alphabétique en utilisant la clé de tri modifiée
        return [...cardsData].sort((a, b) =>
            getSortKey(a.title).localeCompare(getSortKey(b.title), "fr", {
                sensitivity: "base",
            })
        );
    };

    const cards = getCardsAlphabetically();

    return (
        <>
            <Navbar pageTitle="Accueil" />
            <NavbarSpacer />
            <div className="container mx-auto px-4 pt-4">
                <Pagination name={domaine} showDomaine={setDomaine} />
                <Cards cards={cards} />
                <About />
                <ScrollButton scrollStepInPx={1000} delayInMs={5} />
            </div>
        </>
    );
}

export default App;
