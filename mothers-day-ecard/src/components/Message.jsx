import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Mama from "../assets/Mama.jpg";
import Atropos from "atropos/react";
import "atropos/css";
import './Message.css';
import 'animate.css';
import MamasHand from "./MamasHand";
import FallbackContent from "./FallbackContent";

const Message = ({ message }) => {
    const [showCard, setShowCard] = useState(true);
    const navigate = useNavigate();
    const stopMusicRef = useRef(null); // Reference to stopMusic function

    const handleBackClick = () => {
        console.log("Back button clicked");
        if (stopMusicRef.current) {
            stopMusicRef.current(); // Stop the music
        }
        navigate("/");
        setShowCard(false);
    };

    const stopSong = () => {
        if (stopMusicRef.current) {
            stopMusicRef.current(); // Stop the music
        }
    };

    return (
        <div className="ecard-message animate__animated animate__fadeInDownBig">
            {showCard ? (
                <Atropos
                    className="ecard-content animate__animated animate__fadeInDownBig"
                    activeOffset={40}
                    shadow={true}
                >
                    <MamasHand stopMusic={(callback) => (stopMusicRef.current = callback)} />
                    <h1>Happy Mother's Day!</h1>
                    <img src={Mama} alt="Mama" />
                    <p>Dear Mom,</p>
                    <p>Thank you for your endless love and support.</p>
                    <p>You are the heart of our family.</p>
                    <p>Wishing you a day filled with love and joy!</p>
                    <p>I will forever hold my mother's hand.</p>
                    <p>Love, Brittani</p>
                    <button onClick={handleBackClick}>Back</button>
                </Atropos>
            ) : (
                <FallbackContent stopSong={stopSong} />
            )}
        </div>
    );
};

export default Message;