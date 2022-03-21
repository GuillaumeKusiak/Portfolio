import React from 'react';
import email from "../assets/img/gmail-icon(1).svg";
import linkedin from "../assets/img/linkedin-icon-2(1).svg";
import tel from "../assets/img/tel.svg";

const ContentContact = () => {
    return (
        <section id={"contact"} className={"content-contact"}>
            <header>
                <h1>Besoin de me contacter <span>?</span></h1>
                <p>Vous voulez prendre contact avec moi, je vous laisse<br/> choisir le moyen le plus adéquat <span>!</span></p>
            </header>
            <section className={"contact"}>
                <div className={"email"}>
                    <img src={email} />
                    <a>guillaume.kusiak@etu.univ-amu.fr</a>
                </div>
                <div className="linkedin">
                    <img src={linkedin} />
                    <a>Guillaume Kusiak</a>
                </div>
                <div className="tel">
                    <img src={tel} />
                    <a>06.50.55.94.21</a>
                </div>
            </section>
        </section>
    );
};

export default ContentContact;