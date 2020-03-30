import React from "react";

import { domaines } from "../../data";
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

export default props => (
    <ul className="pagination pagination-sm justify-content-center">
        {renderDomainesList(props)}
    </ul>
);
