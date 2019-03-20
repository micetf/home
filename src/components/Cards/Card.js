import React from "react";

import CardBody from "./CardBody";

export default ({ title, url, description, thumbnail }) => {
    const body = { title, url, description };
    return (
        <div className="card border-dark">
            <img src={thumbnail} className="card-img-top" alt={title} />
            <CardBody {...body} />
        </div>
    );
};
