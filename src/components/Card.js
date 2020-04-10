import React from "react";

import "./Card.css";

export default function Card({ name }) {
    return (
        <div className="Card">
            {/*map cards from recived data*/}
            <p>{name}</p>
        </div>
    );
}
