import React from 'react';
import {NavLink} from "react-router-dom";

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
                <NavLink to={"/contact"}>Contactez-moi</NavLink>
            </button>
        </header>
    );
};

export default Presentation;