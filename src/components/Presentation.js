import React from 'react';
import {HashLink as Link} from "react-router-hash-link";

const Presentation = () => {
    return (
        <header className={"presentation"}>
            <h2>je m'appelle Guillaume</h2>
            <p>
                Je suis actuellement <br/>
                étudiant en 1ère année <br/>
                de BUT Informatique.
            </p>
            <button>
                <Link className={"link"} to="/#contact" smooth={true} spy={true} duration={500} >Contactez-moi</Link>
            </button>
        </header>
    );
};

export default Presentation;