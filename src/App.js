import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import "./styles/index.scss"

const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/about"} element={<About />}/>
                <Route path={"/contact"} element={<Contact />}/>
                <Route path={"/projects"} element={<Projects />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;