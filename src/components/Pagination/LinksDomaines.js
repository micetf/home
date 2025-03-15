import React from "react";

import { domaines } from "micetf-data";
import LinkDomaine from "./LinkDomaine";
import LinkDomaineActif from "./LinkDomaineActif";

const renderDomainesList = ({ name, showdomaine }) =>
    domaines.map((domaine, index) =>
        domaine.name !== name ? (
            <LinkDomaine key={index} {...domaine} showdomaine={showdomaine} />
        ) : (
            <LinkDomaineActif key={index} {...domaine} />
        )
    );

export default (props) => (
    <ul className="nav nav-pills nav-fill mb-2 border border-3">
        {renderDomainesList(props)}
    </ul>
);
