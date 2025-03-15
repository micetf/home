import React from "react";
import PropTypes from "prop-types";
import Links from "../../Utils/Links";
import Contact from "./Contact";
import List from "./List";
import Paypal from "./Paypal";
import Tools from "./Tools";
import Videos from "./Videos";
import MentionsLegales from "./MentionsLegales";

function NavbarCollapse({ show, menu }) {
    const navbarClass = `${
        show ? "block" : "hidden"
    } lg:flex lg:items-center lg:w-auto w-full lg:ml-auto`;

    return (
        <div className={navbarClass} id="navbarSupportedContent">
            <Links links={menu} />
            <div className="flex flex-wrap lg:flex-nowrap items-center">
                <Paypal />
                <MentionsLegales />
                <Tools />
                <List />
                <Videos />
                <Contact />
            </div>
        </div>
    );
}

NavbarCollapse.propTypes = {
    show: PropTypes.bool.isRequired,
    menu: PropTypes.array.isRequired,
};

export default NavbarCollapse;
