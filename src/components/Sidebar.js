import React from "react";

import "./Sidebar.css";

// import InputForm from "./InputForm"; Maybe for later use

function Sidebar({
    searchId,
    searchLocation: searchStatus,
    searchName,
    handleInput,
    handleSubmit,
    getRandomCharacters,
}) {
    return (
        <div className="Sidebar">
            <div className="Sidebar-header">
                <h1>RICK AND MORTY</h1>
                <h2>Character status</h2>
            </div>

            <div className="Sidebar-inputs">
                <form className="InputForm" onSubmit={handleSubmit}>
                    <input
                        type="number"
                        value={searchId}
                        name="searchId"
                        placeholder="Search by ID"
                        onChange={handleInput}
                    />
                    <button type="submit">Get by: ID</button>
                </form>

                <form className="InputForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={searchName}
                        name="searchName"
                        placeholder="Search by Name"
                        onChange={handleInput}
                    />
                    <button type="submit">Get by: Name</button>
                </form>

                <form className="InputForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={searchStatus}
                        name="searchLocation"
                        placeholder="Search by Status"
                        onChange={handleInput}
                    />
                    <button type="submit">Get by: Status</button>
                </form>
            </div>

            <button className="Sidebar-random" onClick={getRandomCharacters}>
                Get random characters
            </button>

            <div className="Sidebar-credits">
                <span>
                    <p>API by</p>
                    <p>Axel Fuhrmann</p>
                </span>
                <span>
                    <p>APP by</p>
                    <p>Eryk Kleczewski</p>
                </span>
            </div>
        </div>
    );
}
export default Sidebar;
