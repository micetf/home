import React from "react";

import Links from "../../Utils/Links";
import Contact from "./Contact.js";
import List from "./List.js";
import Paypal from "./Paypal";
import Tools from "./Tools.js";
import Videos from "./Videos.js";
import MentionsLegales from "./MentionsLegales.js";

const getClassName = (show) =>
    ["collapse", "navbar-collapse", show ? "show" : ""].join(" ");
export default ({ show, menu }) => (
    <div className={getClassName(show)} id="navbarSupportedContent">
        <Links links={menu} />
        <Paypal />
        <MentionsLegales />
        <Tools />
        <List />
        <Videos />
        <Contact />
    </div>
);
