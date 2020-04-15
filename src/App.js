import React, { useState, useEffect } from "react";
import { useFetchApi } from "./hooks/useFetchApi";

import "./App.css";
import Sidebar from "./components/Sidebar";
import CardsContainer from "./components/CardsContainer";

function App() {
    const [searchId, setSearchId] = useState("");
    const [preparedUrl, setPreparedUrl] = useState("");
    const [searchName, setName] = useState("");
    const [searchStatus, setSearchStatus] = useState("");
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
                setSearchStatus(target.value);
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
        console.log("searchId", searchId);
    }

    // Handle submit of form
    function handleSubmit(event) {
        event.preventDefault();

        // trigger fetch and update state

        setSubmitedSearch(true);
        setInProgress(true);
    }

    function getRandomCharacters() {
        let randomPage = Math.floor(Math.random() * 26);
        let endpoint =
            "https://rickandmortyapi.com/api/character/?page=" + randomPage;

        setPreparedUrl(endpoint);
        setSubmitedSearch(true);
        setInProgress(true);
    }

    // Prepare url for fetch
    useEffect(() => {
        prepareUrl();
    }, [searchId, searchName, searchStatus]);
    function prepareUrl() {
        let endpoint = "https://rickandmortyapi.com/api/character/";
        if (searchId) {
            endpoint = endpoint + searchId;
            setPreparedUrl(endpoint);
        } else if (searchName) {
            endpoint = endpoint + "?name=" + searchName;
            setPreparedUrl(endpoint);
        } else if (searchStatus) {
            endpoint = endpoint + "?status=" + searchStatus;
            setPreparedUrl(endpoint);
        }
    }

    // Fetch data from Api
    const [fetchedData] = useFetchApi(preparedUrl, submitedSearch);

    // Update state with characters data
    useEffect(() => {
        if (fetchedData) {
            // reset forms and triggering from setSubmitedSearch
            setSearchId("");
            setName("");
            setSearchStatus("");
            setSubmitedSearch(false);

            setCharactersData(fetchedData);

            setInProgress(false);
        } else {
            setSubmitedSearch(false);
            setInProgress(false);
        }
    }, [fetchedData]);

    return (
        <div className="App">
            <Sidebar
                searchId={searchId}
                searchName={searchName}
                searchLocation={searchStatus}
                handleInput={handleChange}
                handleSubmit={handleSubmit}
                getRandomCharacters={getRandomCharacters}
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
