import React from "react";

export default ({ path = "https://micetf.fr" }) => {
    const a = document.createElement("a");
    a.target = "_blank";
    a.href = `${path}/index`;
    const handleClick = (e) => {
        e.preventDefault();
        a.click();
    };

    return (
        <button
            className="btn btn-secondary my-1 mx-1"
            title="Liste de outils rangés par ordre alphabétique..."
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                height="1em"
                fill="#f8f9fa"
            >
                <path d="M1 4h2v2H1V4zm4 0h14v2H5V4zM1 9h2v2H1V9zm4 0h14v2H5V9zm-4 5h2v2H1v-2zm4 0h14v2H5v-2z" />
            </svg>
        </button>
    );
};
