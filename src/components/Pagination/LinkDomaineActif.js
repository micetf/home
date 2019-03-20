import React from "react";

export default ({ label, name }) => {
    return (
        <li className="page-item active" key={name} aria-current="page">
            <span className="page-link">
                {label}
                <span className="sr-only">(current)</span>
            </span>
        </li>
    );
};
