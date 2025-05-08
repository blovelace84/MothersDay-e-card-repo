import React, { useRef } from "react";

const MamasHand = ({ stopMusic }) => {
    const audioRef = useRef(null);

    const playMusic = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio("sounds/mamashand.mp3");
        }
        audioRef.current.play();
    };

    // Stop the music when the parent calls stopMusic
    if (stopMusic && audioRef.current) {
        stopMusic(() => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // Reset the audio to the beginning
        });
    }

    return (
        <button onClick={playMusic}>Play</button>
    );
};

export default MamasHand;