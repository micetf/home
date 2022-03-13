import React from "react";

const handleClick = (e, { showdomaine, name }) => {
    e.preventDefault();
    showdomaine(name);
};
export default ({ label, href, name, showdomaine }) => {
    return (
        <li className="nav-item" key={name}>
            <a
                className="nav-link"
                href={href}
                onClick={(e) => handleClick(e, { showdomaine, name })}
            >
                {label}
            </a>
        </li>
    );
};
