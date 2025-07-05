import React from "react";
import { Route, Routes } from "react-router-dom";
import Webpdf from "./web";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const NotesPdf = () => {
    <>
        <Header />
        <Routes>
            <Route path="webnotes" element={<Webpdf />} />
        </Routes>
        <Footer />
    </>

};

export default NotesPdf;

