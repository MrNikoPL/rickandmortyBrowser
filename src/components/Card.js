import React from "react";

import "./Card.css";

export default function Card({
    name,
    image,
    id,
    status,
    origin,
    location,
    species,
    gender,
}) {
    let styleStatus = (isAlive) => {
        let colorName = "white";
        if (isAlive === "Dead") {
            colorName = "red";
        } else if (isAlive === "Alive") {
            colorName = "green";
        }

        return { color: colorName };
    };

    return (
        <div className="Card">
            <div
                className="Card-image"
                style={{ backgroundImage: "url(" + image + ")" }}
            >
                <h3>{name}</h3>
            </div>
            <div className="Card-id">
                <p>id: {id}</p>
            </div>
            <div className="Card-status">
                <ul>
                    <li>
                        <span className="Card-status-position">Status:</span>
                        <span
                            className="Card-status-data"
                            style={styleStatus(status)}
                        >
                            {status}
                        </span>
                    </li>
                    <li>
                        <span className="Card-status-position">Origin:</span>
                        <span className="Card-status-data">{origin}</span>
                    </li>

                    <li>
                        <span className="Card-status-position">Spiecies:</span>
                        <span className="Card-status-data">{species}</span>
                    </li>
                    <li>
                        <span className="Card-status-position">Gender:</span>
                        <span className="Card-status-data">{gender}</span>
                    </li>
                    <li>
                        <span className="Card-status-position">Location:</span>
                        <span className="Card-status-data">{location}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
