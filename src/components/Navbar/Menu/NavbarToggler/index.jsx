import React from "react";
import PropTypes from "prop-types";

function NavbarToggler({ handleNavbarToggler }) {
    return (
        <button
            className="lg:hidden text-white inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavbarToggler}
        >
            <span className="sr-only">Ouvrir le menu</span>
            {/* Icon when menu is closed */}
            <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </button>
    );
}

NavbarToggler.propTypes = {
    handleNavbarToggler: PropTypes.func.isRequired,
};

export default NavbarToggler;
