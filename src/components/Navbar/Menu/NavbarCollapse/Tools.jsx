import React from "react";
import PropTypes from "prop-types";

function Tools({ path = "https://micetf.fr" }) {
    const handleClick = (e) => {
        e.preventDefault();
        window.open(`${path}/outils`, "_blank");
    };

    return (
        <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-2 my-1 mx-1 rounded"
            title="Chercher un outil sur micetf.fr..."
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                height="1em"
                className="fill-current"
            >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
        </button>
    );
}

Tools.propTypes = {
    path: PropTypes.string,
};

export default Tools;
