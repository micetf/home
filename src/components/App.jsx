import React, { useState } from "react";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import Cards from "./Cards";
import ScrollButton from "./ScrollButton";
import About from "./About";
import { outils, amis } from "micetf-data";

function App() {
    const [domaine, setDomaine] = useState("maths");
    const cards = domaine !== "amis" ? outils(domaine) : amis;

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
