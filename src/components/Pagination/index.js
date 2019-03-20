import React from "react";

import LinksDomaines from "./LinksDomaines";

export default props => (
    <nav aria-label="Page navigation" className="mt-3">
        <LinksDomaines {...props} />
    </nav>
);
