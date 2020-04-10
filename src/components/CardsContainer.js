import React from "react";

import "./CardsContainer.css";

import Card from "./Card";

export default function CardsContainer() {
    return (
        <div className="CardsContainer">
            {/*map cards from recived data*/}
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}
