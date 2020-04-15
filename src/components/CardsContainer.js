import React from "react";

import "./CardsContainer.css";

import Card from "./Card";
import { useState, useEffect } from "react";

export default function CardsContainer({ charactersData }) {
    const [cards, setCards] = useState("");

    // map is running multiple times
    useEffect(() => {
        let arrayCards;
        if (charactersData) {
            if (
                Array.isArray(charactersData.results) &&
                charactersData.results[0] != null
            ) {
                arrayCards = charactersData.results.map((character) => {
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
            } else if (charactersData.id != null) {
                arrayCards = (
                    <Card
                        key={charactersData.id}
                        id={charactersData.id}
                        name={charactersData.name}
                        image={charactersData.image}
                        status={charactersData.status}
                        species={charactersData.species}
                        gender={charactersData.gender}
                        location={charactersData.location.name}
                        origin={charactersData.origin.name}
                    />
                );
            }
        }
        setCards(arrayCards);
    }, [charactersData]);

    return <div className="CardsContainer">{cards}</div>;
}
