import React from "react";
import PropTypes from "prop-types";

function Contact({ tool = "" }) {
    const handleClick = (e) => {
        e.preventDefault();
        const emailParts = [
            "mailto",
            ":",
            "webmaster",
            "@",
            "micetf",
            ".",
            "fr",
            "?",
            "subject",
            "=",
            "A propos de /",
            tool,
        ];
        window.location.href = emailParts.join("");
    };

    return (
        <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-2 my-1 mx-1 rounded"
            title="Pour contacter le webmaster..."
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                height="1em"
                className="fill-current"
            >
                <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" />
            </svg>
        </button>
    );
}

Contact.propTypes = {
    tool: PropTypes.string,
};

export default Contact;
