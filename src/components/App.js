import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
// import "lazysizes";
// import "lazysizes/plugins/parent-fit/ls.parent-fit";

import { outils, amis } from "micetf-data";
import "../style.css";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import Cards from "./Cards";
import ScrollButton from "./ScrollButton";
import About from "./About";

export default () => {
    const [domaine, setDomaine] = useState("maths");

    const cards = domaine !== "amis" ? outils(domaine) : amis;

    return (
        <>
            <Navbar />
            <div className="container">
                <Pagination name={domaine} showdomaine={setDomaine} />
                <Cards cards={cards} />
                <About />
                <ScrollButton scrollStepInPx="1000" delayInMs="5" />
            </div>
        </>
    );
};
