import React from "react";
import PropTypes from "prop-types";
import { getThumbnailUrl } from "micetf-data";
import CardBody from "./CardBody";

function Card({ title, url, description, thumbnail }) {
    const body = { title, url, description };

    // Récupérer l'URL de la miniature via la fonction du package data
    const imgSrc = getThumbnailUrl(thumbnail);

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
