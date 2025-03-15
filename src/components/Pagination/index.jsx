import React from "react";
import PropTypes from "prop-types";
import LinksDomaines from "./LinksDomaines";

function Pagination(props) {
    return (
        <nav aria-label="Page navigation" className="mt-3">
            <LinksDomaines {...props} />
        </nav>
    );
}

Pagination.propTypes = {
    name: PropTypes.string.isRequired,
    showDomaine: PropTypes.func.isRequired,
};

export default Pagination;
