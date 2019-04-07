import React from "react";

import CardBody from "./CardBody";

export default ({ title, url, description, thumbnail }) => {
    const body = { title, url, description };
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-xl-4 mb-3">
            <div className="card border border-dark">
                <img
                    src={thumbnail}
                    className="card-img-top border border-secondary"
                    alt={title}
                />
                <CardBody {...body} />
            </div>
        </div>
    );
};
