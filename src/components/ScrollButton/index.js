import React, { useState } from "react";

export default ({ scrollStepInPx, delayInMs }) => {
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
            className="btn btn-secondary scrollToTop"
            onClick={e => scroll || setScroll(true)}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                height="2em"
                fill="#f8f9fa"
            >
                <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
            </svg>
        </button>
    );
};
