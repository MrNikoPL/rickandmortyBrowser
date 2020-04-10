import React from "react";

import "./CardsContainer.css";

import Card from "./Card";
import { useState, useEffect } from "react";

export default function CardsContainer({ charactersData }) {
    const [cards, setCards] = useState("");

    // map is running multiple times
    useEffect(() => {
        if (charactersData) {
            let arrayCards = charactersData.map((character) => {
                return <Card key={character.id} name={character.name} />;
            });
            setCards(arrayCards);
        }
    }, [charactersData]);

    return (
        <div className="CardsContainer">
            {/*map cards from recived data*/}
            {cards}
        </div>
    );
}
