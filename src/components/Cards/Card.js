import React from "react";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import CardBody from "./CardBody";

export default ({ title, url, description, thumbnail }) => {
    const body = { title, url, description };
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-xl-4 mb-3">
            <div className="card border border-dark">
                <img
                    data-src={thumbnail}
                    className="card-img-top border border-secondary lazyload"
                    alt={title}
                />
                <CardBody {...body} />
            </div>
        </div>
    );
};
