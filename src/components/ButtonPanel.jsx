import "../style/ButtonStyle.css";
import React from "react";
export default function ButtonPanel(props) {
    return (
        <div className="button-panel">
            <button className="styled-button" onClick={() => { props.send('all') }}>All</button>
            <button className="styled-button" onClick={() => { props.send('Men') }}>Men</button>
            <button className="styled-button" onClick={() => { props.send('Women') }}>Women</button>
            <button className="styled-button" onClick={() => { props.send('Children') }}>Children</button>
        </div>
    );
}
