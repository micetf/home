import React from "react";

import Links from "../../Utils/Links";
import Contact from "./Contact.js";
import GoogleSearch from "./GoogleSearch";
import List from "./List.js";
import Paypal from "./Paypal";
import Tools from "./Tools.js";
import Videos from "./Videos.js";

const getClassName = (show) =>
    ["collapse", "navbar-collapse", show ? "show" : ""].join(" ");
export default ({ show, menu }) => (
    <div className={getClassName(show)} id="navbarSupportedContent">
        <Links links={menu} />
        <Paypal />
        <Tools />
        <List />
        <Videos />
        <Contact />
        <GoogleSearch />
    </div>
);
