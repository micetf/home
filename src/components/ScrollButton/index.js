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
            <span className="glyphicon glyphicon-chevron-up" />
        </button>
    );
};
