import React from "react";
import Card from "./Card";

const renderList = cards =>
    cards.map((card, index) => <Card key={index} {...card} />);

const Cards = ({ cards }) => (
    <div className="card-columns">{renderList(cards)}</div>
);

export default Cards;
