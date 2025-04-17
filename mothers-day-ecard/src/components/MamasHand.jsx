import React from "react";

const MamasHand = () => {
    const playMusic = () => {
        const audio = new Audio("sounds/mamashand.mp3");
        audio.play();
    };
    return(
        <button onClick={playMusic}>Play</button>
    );
}

export default MamasHand;