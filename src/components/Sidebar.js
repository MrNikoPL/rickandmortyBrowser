import React from "react";

import "./Sidebar.css";

import InputForm from "./InputForm";

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Sidebar-header">
                <h1>Rick And Morty</h1>
                <h2>Character status</h2>
            </div>

            <div className="Sidebar-inputs">
                <InputForm typeInput="number" typeSearch="ID" />
                <InputForm typeInput="text" typeSearch="Name" />
                <InputForm typeInput="text" typeSearch="Location" />
            </div>

            <button>Get random characters</button>

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
