import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../style.scss";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import Cards from "./Cards";
import ScrollButton from "./ScrollButton";
import { outils, amis } from "./config";

export default () => {
    const [domaine, setDomaine] = useState("maths");

    const cards = domaine !== "amis" ? outils(domaine) : amis;

    return (
        <>
            <Navbar />
            <div className="container">
                <Pagination name={domaine} showdomaine={setDomaine} />
                <Cards cards={cards} />
                <ScrollButton scrollStepInPx="50" delayInMs="20" />
            </div>
        </>
    );
};
