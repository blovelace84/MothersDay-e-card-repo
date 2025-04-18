import React, { useState } from "react";
import 'animate.css';
import Message from "./Message"


const ECard = () => {
    const [showCard, setShowCard] = useState(false);

    const handleStartClick = () => {
        setShowCard(true);
    };

    return(
        <div className="title-screen">
           {!showCard ? (
            <div className="title-content animate__animated animate__fadeIn">
                <h1>You Got a Mother's Day Card!</h1>
                <p>Click below to view your e-card</p>
                <button onClick={handleStartClick}>View Message</button>
            </div>
           ) : (
            <Message />
           )}
        </div>
    );
}

export default ECard;