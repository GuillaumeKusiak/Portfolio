import React from 'react';
import {NavLink} from "react-router-dom";

const Presentation = () => {
    return (
        <header className={"presentation"}>
            <h2>je m'appelle Guillaume Kusiak</h2>
            <p>
                Je suis actuellement <br/>
                étudiant en 1ère année <br/>
                de BUT Informatique.
            </p>
            <button>
                <NavLink to={"/contact"}>Contacter moi</NavLink>
            </button>
        </header>
    );
};

export default Presentation;