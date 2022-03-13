import React from "react";

export default ({ label, name }) => {
    return (
        <li className="nav-item" key={name} aria-current="page">
            <span className="nav-link  active">
                {label}
                <span className="visually-hidden">(current)</span>
            </span>
        </li>
    );
};
