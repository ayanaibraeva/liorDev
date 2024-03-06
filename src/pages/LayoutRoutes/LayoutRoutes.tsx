import React from 'react';
import {Route, Routes} from "react-router-dom";;
import * as LayoutPages from "../../apps/Layout/index"
const LayoutRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutPages.Main/>} />
            <Route path="/aboutUs" element={<LayoutPages.AboutUs/>} />
            <Route path="/ourWorks" element={<LayoutPages.OurWorks/>} />
            <Route path="/services" element={<LayoutPages.Services/>} />
            <Route path="/partners" element={<LayoutPages.Partners/>} />
        </Routes>
    );
};

export default LayoutRoutes;

