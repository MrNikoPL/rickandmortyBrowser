import React from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import CardsContainer from "./components/CardsContainer";

function App() {
    return (
        <div className="App">
            <Sidebar />
            <CardsContainer />
        </div>
    );
}

export default App;
