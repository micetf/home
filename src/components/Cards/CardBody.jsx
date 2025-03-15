import React from "react";
import PropTypes from "prop-types";

function CardBody({ url, title, description }) {
    return (
        <div className="p-4">
            <h5 className="font-bold text-xl mb-2">
                <a
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                    {title}
                </a>
            </h5>
            <p className="text-gray-700 text-base">{description}</p>
        </div>
    );
}

CardBody.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default CardBody;
