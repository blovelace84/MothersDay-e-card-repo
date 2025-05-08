import React, { useRef, useEffect } from "react";

const MamasHand = ({ stopMusic }) => {
    const audioRef = useRef(null);

    const playMusic = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio("sounds/mamashand.mp3");
        }
        audioRef.current.play();
    };

    // Automatically play music when the component is rendered
    useEffect(() => {
        playMusic();
    }, []);

    // Stop the music when the parent calls stopMusic
    useEffect(() => {
        if (stopMusic) {
            stopMusic(() => {
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0; // Reset the audio to the beginning
                }
            });
        }
    }, [stopMusic]);

    return null;
};

export default MamasHand;