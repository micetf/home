import React from "react";

const action = "https://cse.google.com/cse/publicurl";
const cx = "partner-pub-3083664774752222:3949962842";

const renderInputText = () => (
    <input
        className="form-control"
        type="text"
        id="q"
        name="q"
        title="Recherche"
        alt="Recherche"
        placeholder="Recherche sur le web"
        maxLength="256"
    />
);
const renderInputHidden = () => (
    <input type="hidden" id="cx" name="cx" value={cx} />
);

const renderButtonSubmit = () => (
    <button
        className="btn btn-outline-secondary"
        type="submit"
        id="searchSubmit"
        name="submit"
        alt="Chercher"
        title="Soumettre la recherche"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            height="1em"
            fill="#f8f9fa"
        >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
    </button>
);
export default () => (
    <form
        className="d-flex"
        method="get"
        title="Formulaire de recherche"
        action={action}
    >
        {renderInputText()}
        {renderInputHidden()}
        {renderButtonSubmit()}
    </form>
);
