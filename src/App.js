import React, { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import CardsContainer from "./components/CardsContainer";

function App() {
    const [searchId, setSearchId] = useState("");
    const [searchName, setName] = useState("");
    const [searchLocation, setLoaction] = useState("");

    // Handle changes of form, set state in app
    function handleChange({ target }) {
        switch (target.name) {
            case "searchId":
                setSearchId(target.value);
                break;
            case "searchName":
                setName(target.value);
                break;
            case "searchLocation":
                setLoaction(target.value);
                break;

            default:
                console.log(
                    "Unnessecary change on name: " +
                        target.tname +
                        " || value: " +
                        target.value
                );
                break;
        }
    }

    return (
        <div className="App">
            <Sidebar
                searchId={searchId}
                searchName={searchName}
                searchLocation={searchLocation}
                handleFunction={handleChange}
            />
            <CardsContainer
                searchId={searchId}
                searchName={searchName}
                searchLocation={searchLocation}
            />
        </div>
    );
}

export default App;
