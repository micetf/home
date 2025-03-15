import React from "react";
import { brand } from "./config";
import Link from "./Utils/Link";
import Menu from "./Menu";

function Navbar() {
    return (
        <nav className="bg-gray-800 text-white fixed top-0 left-0 right-0 z-10 px-3">
            <div className="container mx-auto flex items-center justify-between h-16">
                <Link {...brand} />
                <Menu menu={[]} />
            </div>
        </nav>
    );
}

export default Navbar;
