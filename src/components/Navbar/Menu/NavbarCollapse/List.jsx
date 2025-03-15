import React from "react";
import PropTypes from "prop-types";

function List({ path = "https://micetf.fr" }) {
    const handleClick = (e) => {
        e.preventDefault();
        window.open(`${path}/index`, "_blank");
    };

    return (
        <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-2 my-1 mx-1 rounded"
            title="Liste de outils rangés par ordre alphabétique..."
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                height="1em"
                className="fill-current"
            >
                <path d="M1 4h2v2H1V4zm4 0h14v2H5V4zM1 9h2v2H1V9zm4 0h14v2H5V9zm-4 5h2v2H1v-2zm4 0h14v2H5v-2z" />
            </svg>
        </button>
    );
}

List.propTypes = {
    path: PropTypes.string,
};

export default List;
