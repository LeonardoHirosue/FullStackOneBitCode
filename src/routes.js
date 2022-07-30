import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanetsScreen from "./screen/planets";
import PlanetScreen from "./screen/planet";
import NotFoundScreen from "./screen/notfound";

//maneira abreviada de "return" na arrowFunction"
const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PlanetsScreen />} />
            <Route path="/planet/:id" element={<PlanetScreen />} />
            <Route path="*" element={<NotFoundScreen/>}/>
        </Routes>
    </BrowserRouter>
);

export default Rotas;