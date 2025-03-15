import React from "react";
import PropTypes from "prop-types";
import { getFullThumbnailPath } from "micetf-data";
import CardBody from "./CardBody";

function Card({ title, url, description, thumbnail }) {
    const body = { title, url, description };

    // Récupérer le chemin de base depuis micetf-data
    let imgSrc = getFullThumbnailPath(thumbnail);

    // Appliquer le préfixe de manière plus robuste
    if (window.THUMBNAILS_PREFIX && window.THUMBNAILS_PREFIX !== ".") {
        // Utiliser un chemin absolu avec le préfixe 'home'
        // Remplace complètement './thumbnails/' par '/home/thumbnails/'
        imgSrc = imgSrc.replace(
            "./thumbnails/",
            `/${window.THUMBNAILS_PREFIX}/thumbnails/`
        );
    }

    return (
        <div className="mb-3">
            <div className="border border-gray-800 rounded overflow-hidden shadow-lg">
                <img
                    src={imgSrc}
                    className="w-full border border-gray-400"
                    alt={title}
                    loading="lazy"
                />
                <CardBody {...body} />
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
};

export default Card;
