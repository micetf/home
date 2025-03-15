import React from "react";
import PropTypes from "prop-types";

function Link({ link, current, ...props }) {
    return (
        <a {...props}>
            {link}
            {current ? <span className="sr-only">(current)</span> : ""}
        </a>
    );
}

Link.propTypes = {
    link: PropTypes.string.isRequired,
    current: PropTypes.bool,
};

Link.defaultProps = {
    current: false,
};

export default Link;
