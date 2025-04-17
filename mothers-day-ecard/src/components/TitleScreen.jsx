import React, { useState } from "react";
import MessageDisplay from './MessageDisplay';
import './TitleScreen.css';

const TitleScreen = () => {
    const [message, setMessage] = useState("");

    const handleClick = () => {
        setMessage("Happy Mother's Day Mommy! I love you very much! You are the best mom in the world and I will forever hold on to your hand!");
    };

    return(
        <div className="title-screen">
            <div className="title-content">
                <button onClick={handleClick} className="title-button">View Message</button>
            </div>
            <MessageDisplay message={message} />
        </div>
    );
};

export default TitleScreen;