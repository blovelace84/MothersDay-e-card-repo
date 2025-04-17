import React from "react";
import "./TitleScreen.css";

const TitleScreen = ({ onStart }) => {
    return(
        <div className="aurora-container">
            <h1>Happy Mothers Day Mommy!</h1>
            <p>Click Below to view your card.</p>
            <button onClick={onStart}>View Message</button>
        </div>
    )
}

export default TitleScreen;