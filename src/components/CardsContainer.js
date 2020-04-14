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
                return (
                    <Card
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        image={character.image}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        location={character.location.name}
                        origin={character.origin.name}
                    />
                );
            });
            setCards(arrayCards);
        }
    }, [charactersData]);

    return <div className="CardsContainer">{cards}</div>;
}
