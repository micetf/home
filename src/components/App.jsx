import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import Cards from "./Cards";
import ScrollButton from "./ScrollButton";
import About from "./About";
import { outils, amis, THUMBNAIL_PATH } from "micetf-data";

// Variable globale pour préfixer le chemin des thumbnails
// Note: En production, cette valeur sera 'home' (sans ./ ni /)
window.THUMBNAILS_PREFIX = import.meta.env.VITE_THUMBNAILS_PREFIX || ".";

function App() {
    const [domaine, setDomaine] = useState("maths");
    const cards = domaine !== "amis" ? outils(domaine) : amis;

    useEffect(() => {
        // Affichage du préfixe en développement pour debug
        if (import.meta.env.DEV) {
            console.log("Environnement:", import.meta.env.MODE);
            console.log("Base URL:", import.meta.env.BASE_URL);
            console.log("Thumbnails prefix:", window.THUMBNAILS_PREFIX);

            // Exemple de chemin transformé
            const examplePath = "./thumbnails/example.png";
            const transformedPath =
                window.THUMBNAILS_PREFIX !== "."
                    ? examplePath.replace(
                          "./thumbnails/",
                          `/${window.THUMBNAILS_PREFIX}/thumbnails/`
                      )
                    : examplePath;
            console.log("Exemple de chemin transformé:", transformedPath);
        }
    }, []);

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4">
                <Pagination name={domaine} showDomaine={setDomaine} />
                <Cards cards={cards} />
                <About />
                <ScrollButton scrollStepInPx={1000} delayInMs={5} />
            </div>
        </>
    );
}

export default App;
