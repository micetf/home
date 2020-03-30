import React from "react";

import { fm } from "../Navbar/config";

export default () => (
    <div className="jumbotron">
        <p>
            <strong>Webmaster : </strong>
            <a {...fm}>Frédéric.MISERY</a>
            <br />
            <strong>Parcours professionnel : </strong>Ingénieur en informatique
            (1987-1993) - Professeur des Ecoles (1994-2008) - ERUN (2009 -
            Aujourd'hui)
            <br />
            <strong>Le site : </strong>
            <a href="https://micetf.fr">MiCetF</a> est un site personnel que je
            développe depuis 2006. D'abord hébergé sur les pages personnelles de
            Free, aujourd'hui il est hébergé chez{" "}
            <a
                href="https://www.ovh.com/fr/"
                target="_blank"
                rel="noopener noreferrer"
            >
                OVH
            </a>
            . Dans le cadre de mes loisirs, je prends plaisir, d'une part, à
            exercer et à développer mes compétences en développement web et,
            d'autre part, à créer des outils numériques à potentiels
            pédagogiques destinés aux enseignants et aux élèves de l'école
            primaire.
        </p>
    </div>
);
