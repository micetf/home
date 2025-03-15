import React from "react";
import PropTypes from "prop-types";
import Link from "./Link";

function Links({ links }) {
    const renderLink = (item, id) => (
        <li className="nav-item p-2" key={id}>
            <Link {...item} />
        </li>
    );

    const renderLinks = (items) => items.map(renderLink);

    return (
        <ul className="navbar-nav flex flex-col lg:flex-row lg:items-center lg:ml-auto">
            {renderLinks(links)}
        </ul>
    );
}

Links.propTypes = {
    links: PropTypes.array.isRequired,
};

export default Links;
