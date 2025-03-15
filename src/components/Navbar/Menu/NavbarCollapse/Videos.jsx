import React from "react";

function Videos() {
    const handleClick = (e) => {
        e.preventDefault();
        window.open("https://www.youtube.com/user/MiCetF/videos", "_blank");
    };

    return (
        <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 my-1 mx-1 rounded"
            title="Chaîne Youtube"
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                height="1em"
                className="fill-current"
            >
                <path d="M16 7l4-4v14l-4-4v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v3zm-8 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
            </svg>
        </button>
    );
}

export default Videos;
