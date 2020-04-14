import React from "react";

import "./Card.css";

export default function Card({ name, image }) {
    return (
        <div className="Card">
            <div
                className="Card-image"
                style={{ backgroundImage: "url(" + image + ")" }}
            >
                <h3>{name}</h3>
            </div>
            <div className="Card-id">
                <p>id:</p>
            </div>
            <div className="Card-status">
                <ul>
                    <li>IsAlive</li>
                    <li>Origin Loc</li>
                    <li>last Loc</li>
                    <li>Spiecie</li>
                    <li>Gender</li>
                </ul>
            </div>
        </div>
    );
}
