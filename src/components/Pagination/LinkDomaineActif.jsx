import React from "react";
import PropTypes from "prop-types";

function LinkDomaineActif({ label, name }) {
    return (
        <li
            className="nav-item flex-1 text-center"
            key={name}
            aria-current="page"
        >
            <span className="block py-2 px-4 bg-blue-600 text-white rounded">
                {label}
                <span className="sr-only">(current)</span>
            </span>
        </li>
    );
}

LinkDomaineActif.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default LinkDomaineActif;
