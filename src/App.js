import React, { useState, useEffect } from "react";
import { useFetchApi } from "./hooks/useFetchApi";

import "./App.css";
import Sidebar from "./components/Sidebar";
import CardsContainer from "./components/CardsContainer";

function App() {
    const [searchId, setSearchId] = useState("");
    const [searchName, setName] = useState("");
    const [searchLocation, setLocation] = useState("");
    const [charactersData, setCharactersData] = useState("");

    const [submitedSearch, setSubmitedSearch] = useState(false);
    const [inProgress, setInProgress] = useState(false);

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
                setLocation(target.value);
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

    // Handle submit of form
    function handleSubmit(event) {
        event.preventDefault();

        // trigger fetch and update state
        setSubmitedSearch(true);
        setInProgress(true);
    }

    // Fetch data from Api
    const [fetchedData] = useFetchApi(
        "https://rickandmortyapi.com/api/character/?name=Rick",
        submitedSearch
    );

    // Update state with characters data
    useEffect(() => {
        if (fetchedData) {
            setCharactersData(fetchedData.results);

            // reset forms and triggering from setSubmitedSearch
            setSearchId("");
            setName("");
            setLocation("");
            setSubmitedSearch("");

            setInProgress(false);
        }
    }, [submitedSearch]);

    return (
        <div className="App">
            <Sidebar
                searchId={searchId}
                searchName={searchName}
                searchLocation={searchLocation}
                handleInput={handleChange}
                handleSubmit={handleSubmit}
            />
            {inProgress ? (
                <div className="CardsContainer">Characters data loading...</div>
            ) : (
                <CardsContainer charactersData={charactersData} />
            )}
        </div>
    );
}

export default App;
