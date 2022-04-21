import React from 'react';
import {HashLink as Link} from "react-router-hash-link";
import menu from "../assets/img/humberger.svg";
import pdf from "../assets/pdf/Kusiak_Guillaume.pdf";

const Navigation = (e) => {

    const openMenu = () => {
        window.addEventListener("scroll",() => {
            document.querySelector(".container-menu").style.width = "0";
            let calc = window.pageYOffset + 64;
            document.querySelector(".container-menu").style.top = calc + "px";
        })
        if (document.querySelector(".container-menu").style.width === "100%"){
            document.querySelector(".container-menu").style.width = "0";
        } else {
            document.querySelector(".container-menu").style.width = "100%";
            let calc = window.pageYOffset + 64;
            document.querySelector(".container-menu").style.top = calc + "px";
        }
    }

    return (
        <nav>
            <ul className={"left"}>
                <h1 className={"title"}>Guillaume Kusiak<span> .</span></h1>
            </ul>
            <ul className={"right"}>
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
            <ul className={"menu"}>
                <img onClick={openMenu} src={menu} alt={"menu"}/>
            </ul>
        </nav>
    );
};

export default Navigation;