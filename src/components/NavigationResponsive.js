import React from 'react';
import {HashLink as Link} from "react-router-hash-link";
import pdf from "../assets/pdf/Kusiak Guillaume.pdf";

const NavigationResponsive = () => {

    return (
        <nav className={"container-menu"}>
            <ul className={"menu-responsive"}>
                <li>
                    <Link className={"link"} to={"/#nav"} smooth={true} spy={true} duration={500}>Accueil</Link>
                </li>
                <li>
                    <Link className={"link"} to={"/#top"} smooth={true} spy={true} duration={500}>Réalisations</Link>
                </li>
                <li>
                    <Link className={"link"} to={"/#about"} smooth={true} spy={true} duration={500}>A propos</Link>
                </li>
                <li>
                    <Link className={"link"} to="/#contact" smooth={true} spy={true} duration={500} >Contact</Link>
                </li>
                <li>
                    <a className={"link"} href={pdf} target={"_blank"}>CV</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationResponsive;