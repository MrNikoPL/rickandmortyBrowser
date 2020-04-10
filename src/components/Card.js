import React from "react";

import "./Card.css";

export default function Card({ name, image }) {
    return (
        <div className="Card">
            {/*map cards from recived data*/}
            <p>{name}</p>
            <img src={image} alt={name} />
        </div>
    );
}
