import React from "react";

const handleClick = (e, { showdomaine, name }) => {
    e.preventDefault();
    showdomaine(name);
};
export default ({ label, href, name, showdomaine }) => {
    return (
        <li className="page-item" key={name}>
            <a
                className="page-link"
                href={href}
                onClick={e => handleClick(e, { showdomaine, name })}
            >
                {label}
            </a>
        </li>
    );
};
