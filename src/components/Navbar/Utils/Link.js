import React from "react";

export default (props) => (
    <a {...props}>
        {" "}
        {props.link}{" "}
        {props.current ? (
            <span className="visually-hidden"> (current) </span>
        ) : (
            ""
        )}{" "}
    </a>
);
