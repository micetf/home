import React from "react";
import PropTypes from "prop-types";

function LinkDomaine({ label, href, name, showDomaine }) {
    const handleClick = (e) => {
        e.preventDefault();
        showDomaine(name);
    };

    return (
        <li className="nav-item flex-1 text-center" key={name}>
            <a
                className="nav-link block py-2 px-4 text-blue-600 hover:bg-blue-100 rounded transition-colors"
                href={href}
                onClick={handleClick}
            >
                {label}
            </a>
        </li>
    );
}

LinkDomaine.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    showDomaine: PropTypes.func.isRequired,
};

export default LinkDomaine;
