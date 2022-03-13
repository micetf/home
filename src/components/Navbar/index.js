import React from "react";

import { brand, menu } from "./config";
import Link from "./Utils/Link";
import Menu from "./Menu/";

export default () => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top px-3">
        <Link {...brand} />
        <Menu menu={menu} />
    </nav>
);
