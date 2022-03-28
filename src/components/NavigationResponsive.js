import React from 'react';
import {HashLink as Link} from "react-router-hash-link";

const NavigationResponsive = () => {

    return (
        <nav className={"container-menu"}>
            <ul className={"menu-responsive"}>
                <li>
                    <Link className={"link"} to={"/#nav"} smooth={true} spy={true} duration={500}>Accueil</Link>
                </li>
                <li>
                    <Link className={"link"} to={"/#top"} smooth={true} spy={true} duration={500}>Mes réalisations</Link>
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

export default NavigationResponsive;