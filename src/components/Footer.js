import React from 'react';
import linkedin from "../assets/img/linkedin-icon (2).svg";
import github from "../assets/img/github-icon.svg";
import download from "../assets/img/download.svg";

const Footer = () => {
    return (
        <footer id={"CV"}>
            <div className={"networks"}>
                <a className={"linkedin"}><img src={linkedin}/></a>
                <a className={"github"}><img src={github}/></a>
            </div>
            <div className="download">
                <img src={download} alt={"donwload"} />
                <a>Mon CV.</a>
            </div>
        </footer>
    );
};

export default Footer;