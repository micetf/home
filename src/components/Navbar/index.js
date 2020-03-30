import React from "react";

import { brand, menu } from "./config";
import Link from "./Utils/Link";
import Menu from "./Menu/";

export default () => (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top">
        <Link {...brand} />
        <Menu menu={menu} />
    </nav>
);
