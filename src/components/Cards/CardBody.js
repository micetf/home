import React from "react";

export default ({ url, title, description }) => (
    <div className="card-body">
        <h5 className="card-title">
            <a href={url} rel="noopener noreferrer" target="_blank">
                {title}
            </a>
        </h5>
        <p className="card-text">{description}</p>
    </div>
);
