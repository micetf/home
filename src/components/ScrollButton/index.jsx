import React, { useState } from "react";
import PropTypes from "prop-types";

function ScrollButton({ scrollStepInPx, delayInMs }) {
    const [scroll, setScroll] = useState(false);

    const scrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(intervalId);
            setScroll(false);
        }
        window.scroll(0, window.pageYOffset - scrollStepInPx);
    };

    const intervalId = scroll ? setInterval(scrollStep, delayInMs) : undefined;

    return (
        <button
            className="bg-gray-600 hover:bg-gray-800 text-white rounded fixed bottom-4 right-4 p-2 transition-opacity opacity-75 hover:opacity-100"
            onClick={() => scroll || setScroll(true)}
            aria-label="Retour en haut de page"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="h-6 w-6 fill-current"
            >
                <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
            </svg>
        </button>
    );
}

ScrollButton.propTypes = {
    scrollStepInPx: PropTypes.number.isRequired,
    delayInMs: PropTypes.number.isRequired,
};

export default ScrollButton;
