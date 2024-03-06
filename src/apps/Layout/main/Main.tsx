import React from 'react';
import {Route, Routes} from "react-router-dom";
import * as LayoutPages from "../../Layout/index";


const Main = () => {
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

export default Main;