import React from "react";
import './MessageDisplay.css';

const MessageDisplay = ({ message }) => {
    return(
        <div className="message-display">
            {message && <p>{message}</p>}
        </div>
    );
};

export default MessageDisplay;