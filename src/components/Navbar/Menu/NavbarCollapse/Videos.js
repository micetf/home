import React from "react";

export default () => {
    const a = document.createElement("a");
    a.target = "_blank";
    a.href = `https://www.youtube.com/user/MiCetF/videos`;
    const handleClick = (e) => {
        e.preventDefault();
        a.click();
    };

    return (
        <button
            className="btn btn-danger my-1 mx-1"
            title="Chaîne Youtube"
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                height="1em"
                fill="#f8f9fa"
            >
                <path d="M16 7l4-4v14l-4-4v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v3zm-8 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
            </svg>
        </button>
    );
};
