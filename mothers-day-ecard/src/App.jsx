import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Message from "./components/Message";
import ECard from "./components/ecard";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ECard />} />
                <Route path="/message" element={<Message />} />
            </Routes>
        </Router>
    );
};

export default App;
