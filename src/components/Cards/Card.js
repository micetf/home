import React from "react";
import { getFullThumbnailPath } from "micetf-data";
import CardBody from "./CardBody";

export default ({ title, url, description, thumbnail }) => {
    const body = { title, url, description };
    // Utiliser getFullThumbnailPath pour obtenir l'URL complète de l'image
    const imgSrc = getFullThumbnailPath(thumbnail);
    console.log(imgSrc);
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-xl-4 mb-3">
            <div className="card border border-dark">
                <img
                    src={imgSrc}
                    data-src={imgSrc}
                    className="card-img-top border border-secondary lazyload"
                    alt={title}
                />
                <CardBody {...body} />
            </div>
        </div>
    );
};
