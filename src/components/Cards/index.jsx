import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

function Cards({ cards }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
            {cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
}

Cards.propTypes = {
    cards: PropTypes.array.isRequired,
};

export default Cards;
