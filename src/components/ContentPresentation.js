import React from 'react';
import Presentation from "./Presentation";
import profile from "../assets/img/2.jpg";

const ContentPresentation = () => {
    return (
        <section id="nav" className={"content-presentation"}>
            <Presentation />
            <img className={"profile"} src={profile}/>
        </section>
    );
};

export default ContentPresentation;