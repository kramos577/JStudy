import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Box from "@mui/material/Box";
import Genki from "./pages/Genki";
import Genki1 from "./pages/Genki1";
import Genki2 from "./pages/Genki2";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Genki1Study from "./pages/Genki1Study";
import Games from "./pages/Games";

// Router should live in app since I'm not doing any complicated routing
// Navbar needs to be in browser router because of all routing must happen in a routing

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Box sx={{ display: "flex" }}>
                    <Header />
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Homepage />} />

                        <Route path="/genki" element={<Genki />} />
                        <Route path="/genki/1" element={<Genki1 />} />
                        <Route path="/genki/2" element={<Genki2 />} />
                        <Route path="/genki/1/study" element={<Genki1Study />} />
                        <Route path="/games" element={<Games />} />
                    </Routes>
                </Box>
            </BrowserRouter>
        </div>
    );
}

export default App;
