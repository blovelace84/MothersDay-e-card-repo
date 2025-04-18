import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Atropos from "atropos/react"; // Import Atropos
import "atropos/css"; // Import Atropos CSS
import './Message.css';
import 'animate.css';
import MamasHand from "./MamasHand";

const Message = ({ message }) => {
    const [showCard, setShowCard] = useState(true);
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/");
        setShowCard(false);
    };

    return (
        <div className="ecard-message animate__animated animate__fadeInDownBig">
            {showCard ? (
                <Atropos
                    className="ecard-content animate__animated animate__fadeInDownBig"
                    activeOffset={40} // Adjust the 3D effect intensity
                    shadow={true} // Enable shadow
                >
                    <MamasHand />
                    <h1>Happy Mother's Day!</h1>
                    <p>Dear Mom,</p>
                    <p>Thank you for your endless love and support.</p>
                    <p>You are the heart of our family.</p>
                    <p>Wishing you a day filled with love and joy!</p>
                    <p>I will forever hold my mother's hand.</p>
                    <p>Love, Brittani</p>
                    <button onClick={handleBackClick}>Back</button>
                </Atropos>
            ) : (
                <div className="fallback-content animate__animated animate__fadeInDownBig">
                    <h2>You have viewed your card's message.</h2>
                    <p>Click the browser's back button to return.</p>
                </div>
            )}
        </div>
    );
};

export default Message;