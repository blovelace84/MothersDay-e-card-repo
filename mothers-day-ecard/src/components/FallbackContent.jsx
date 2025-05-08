import React, { useEffect } from "react";

const FallbackContent = ({ stopSong }) => {
    useEffect(() => {
        stopSong(); // Stop the song when this component is rendered
    }, [stopSong]);

    return (
        <div className="fallback-content animate__animated animate__fadeInDownBig">
            <h2>Message Received.</h2>
            <p>You have received the message.</p>
        </div>
    );
};

export default FallbackContent;