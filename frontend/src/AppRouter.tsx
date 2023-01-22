import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage";
import Genki from "./Genki";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={
                    <Homepage/>
                }/>
                
                <Route path="/genki" element={
                    <Genki/>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter