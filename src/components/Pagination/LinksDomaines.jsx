import React from "react";
import PropTypes from "prop-types";
import { domaines } from "micetf-data";
import LinkDomaine from "./LinkDomaine";
import LinkDomaineActif from "./LinkDomaineActif";

function LinksDomaines({ name, showDomaine }) {
    const renderDomainesList = () =>
        domaines.map((domaine, index) =>
            domaine.name !== name ? (
                <LinkDomaine
                    key={index}
                    {...domaine}
                    showDomaine={showDomaine}
                />
            ) : (
                <LinkDomaineActif key={index} {...domaine} />
            )
        );

    return (
        <ul className="flex flex-wrap md:flex-nowrap nav-pills justify-center border border-gray-300 border-3 rounded p-1">
            {renderDomainesList()}
        </ul>
    );
}

LinksDomaines.propTypes = {
    name: PropTypes.string.isRequired,
    showDomaine: PropTypes.func.isRequired,
};

export default LinksDomaines;
