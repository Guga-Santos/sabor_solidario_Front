import React from "react";

export default function checkboxTermos(props) {
    return (
        <div>
            <li>
                <label><input type="checkbox" /> {props.termoAceitacao} </label>
            </li>
        </div >
    )
}