import React from 'react';
import {HashLink as Link} from "react-router-hash-link";

const Navigation = () => {

    return (
        <nav>
            <ul className={"left"}>
                <h1 className={"title"}>Guillaume<span> .</span></h1>
            </ul>
            <ul className={"right"}>
                <li>
                    <Link className={"link"} to={"/#nav"} smooth={true} spy={true} duration={500}>Accueil</Link>
                </li>
                <li>
                    <Link className={"link"} to={"/#top"} smooth={true} spy={true} duration={500}>Mes projets</Link>
                </li>
                <li>
                    <Link className={"link"} to={"/#about"} smooth={true} spy={true} duration={500}>A propos</Link>
                </li>
                <li>
                    <Link className={"link"} to="/#contact" smooth={true} spy={true} duration={500} >Contact</Link>
                </li>
                <li>
                    <Link className={"link"} to="/#CV" smooth={true} spy={true} duration={500} >Mon CV</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;