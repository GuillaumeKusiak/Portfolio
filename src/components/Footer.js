import React from 'react';
import linkedin from "../assets/img/linkedin-icon (2).svg";
import github from "../assets/img/github-icon.svg";
import download from "../assets/img/download.svg";
import pdf from "../assets/pdf/Kusiak Guillaume.pdf";

const Footer = () => {
    return (
        <footer id={"CV"}>
            <div className={"networks"}>
                <a className={"linkedin"} href={"https://www.linkedin.com/in/guillaume-kusiak-b28463226/"} target={"_blank"} rel="noreferrer"><img src={linkedin} alt={"linkedin"}/></a>
                <a className={"github"} href={"https://github.com/GuillaumeKusiak"} target={"_blank"} rel="noreferrer"><img src={github} alt={"github"}/></a>
            </div>
            <div className="download" onClick={() => {window.open(pdf,"_blank")}}>
                <img src={download} alt={"donwload"} />
                <p>Mon CV.</p>
            </div>
        </footer>
    );
};

export default Footer;