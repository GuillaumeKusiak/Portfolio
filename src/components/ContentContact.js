import React from 'react';
import email from "../assets/img/gmail-icon(1).svg";
import linkedin from "../assets/img/linkedin-icon-2(1).svg";
import tel from "../assets/img/tel.svg";

const ContentContact = () => {
    return (
        <section id={"contact"} className={"content-contact"}>
            <header>
                <h1>Comment me contacter <span>?</span></h1>
                <p>Je vous laisse choisir le moyen le plus adéquat <span>!</span></p>
            </header>
            <section className={"contact"}>
                <div className={"email"} onClick={() => {window.open("mailto:guillaume.kusiak@gmail.com")}}>
                    <img src={email} alt={"email"}/>
                    <p>guillaume.kusiak@gmail.com</p>
                </div>
                <div className="linkedin" onClick={() => {window.open("https://www.linkedin.com/in/guillaume-kusiak-b28463226/","_blank")}}>
                    <img src={linkedin} alt={"linkedin"} />
                    <p>Guillaume Kusiak</p>
                </div>
                <div className="tel" onClick={() => {window.open("tel:0650559421")}}>
                    <img src={tel} alt={"téléphone"} />
                    <p>06.50.55.94.21</p>
                </div>
            </section>
        </section>
    );
};

export default ContentContact;