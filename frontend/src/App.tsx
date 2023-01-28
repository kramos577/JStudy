import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Box from "@mui/material/Box";
import Genki from "./Genki";
import Header from "./components/Header";
import Homepage from "./Homepage";
import Navbar from "./components/Navbar";

// Router should live in app since I'm not doing any complicated routing
// Navbar needs to be in browser router because of all routing must happen in a routing

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Box sx={{ display: "flex" }}>
                    <Header />
                    <Navbar />
                </Box>
                <Routes>
                    <Route path="/" element={<Homepage />} />

                    <Route path="/genki" element={<Genki />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
