import React from 'react';
import ProjectContainer from "./ProjectContainer";
import Projet1 from "../assets/img/Projet1.png";
import Projet2 from "../assets/img/Projet2.png";
import Projet3 from "../assets/img/Projet3.png";

const ContentProjects = () => {
    return (
        <section id={"top"} className={"content-projects"}>
            <header>
                <h1><span>&lt; </span>Mes réalisations web<span> /&gt;</span></h1>
            </header>
            <div>
                <ProjectContainer link={Projet1} description={"Sète-Circuit-Tour"} url={"https://guillaumekusiak.github.io/Sete-Circuit-Tour/"}/>
                <ProjectContainer link={Projet2} description={"Le Cannabidiol"} url={"https://guillaumekusiak.github.io/Le-cannabidiol-CBD/"}/>
                <ProjectContainer link={Projet3} description={"Escape-Aix"} url={"https://escape-aix.github.io/EscapeGame/"}/>
            </div>
        </section>
    );
};

export default ContentProjects;