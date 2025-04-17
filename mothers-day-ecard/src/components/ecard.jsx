import React, { useState } from "react";
import 'animate.css';

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
            <div className="ecard-content animate__animated animate__fadeInDownBig">
                <h1>Happy Mother's Day!</h1>
                <p>Dear Mom,</p>
                <p>Thank you for your endless love and support.</p>
                <p>You are the heart of our family.</p>
                <p>Wishing you a day filled with love and joy!</p>
                <p>I will forever hold my mother's hand.</p>
                <p>Love, Brittani</p>
                <button onClick={() => setShowCard(false)}>Back</button>
            </div>
           )}
        </div>
    )
}

export default ECard;