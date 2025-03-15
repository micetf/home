import React, { useState } from "react";
import PropTypes from "prop-types";
import NavbarToggler from "./NavbarToggler";
import NavbarCollapse from "./NavbarCollapse";

function Menu({ menu }) {
    const [show, setShow] = useState(false);

    return (
        <>
            <NavbarToggler handleNavbarToggler={() => setShow(!show)} />
            <NavbarCollapse show={show} menu={menu} />
        </>
    );
}

Menu.propTypes = {
    menu: PropTypes.array.isRequired,
};

export default Menu;
