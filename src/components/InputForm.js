import React from "react";

import "./InputForm.css";

function InputForm({ typeInput, typeSearch }) {
    return (
        <form className="InputForm">
            <input
                type={typeInput}
                name={"search" + typeSearch}
                placeholder={"Search by " + typeSearch}
            />
            <button type="submit">Get by: {typeSearch}</button>
        </form>
    );
}
export default InputForm;
