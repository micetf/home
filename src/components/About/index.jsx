import React from "react";
import { fm } from "../Navbar/config";

function About() {
    return (
        <div className="bg-gray-100 p-4 rounded-lg my-8">
            <div className="space-y-2">
                <p>
                    <strong className="font-bold">Webmaster : </strong>
                    <a {...fm} className="text-blue-600 hover:text-blue-800">
                        Frédéric.MISERY
                    </a>
                </p>
                <p>
                    <strong className="font-bold">
                        Parcours professionnel :{" "}
                    </strong>
                    Ingénieur en informatique (1987-1993) - Professeur des
                    Ecoles (1994-2008) - ERUN (2009 - Aujourd'hui)
                </p>
                <p>
                    <strong className="font-bold">Le site : </strong>
                    <a
                        href="https://micetf.fr"
                        className="text-blue-600 hover:text-blue-800"
                    >
                        MiCetF
                    </a>{" "}
                    est un site personnel que je développe depuis 2006. D'abord
                    hébergé sur les pages personnelles de Free, aujourd'hui il
                    est hébergé chez{" "}
                    <a
                        href="https://www.ovh.com/fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                    >
                        OVH
                    </a>
                    . Dans le cadre de mes loisirs, je prends plaisir, d'une
                    part, à exercer et à développer mes compétences en
                    développement web et, d'autre part, à créer des outils
                    numériques à potentiels pédagogiques destinés aux
                    enseignants et aux élèves de l'école primaire.
                </p>
            </div>
        </div>
    );
}

export default About;
