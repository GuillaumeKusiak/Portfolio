import React from 'react';

const ContentAbout = () => {

    window.onscroll = function (){
        // eslint-disable-next-line no-restricted-globals
        if ((window.scrollY >= innerHeight/4)) {
            document.querySelector("Nav").style.backgroundColor = "rgba(0,198,255,0.9)";
            document.querySelector("Nav").style.boxShadow = "0px 1px 20px 0px rgba(105, 105, 105,1)";
        }
        else {
            document.querySelector("Nav").style.backgroundColor = "rgba(0,198,255,0)";
            document.querySelector("Nav").style.boxShadow = "0px 1px 20px 0px rgba(105, 105, 105,0)";
        }
    }

    return (
        <section id={"about"} className={"content-about"}>
            <header className={"introduction"}>
                <h1>A propos de moi<span>.</span></h1>
                <p>Je m’appelle Guillaume, je suis actuellement étudiant en 1ère année de BUT
                    informatique à l’IUT d’Aix-Marseille.</p>
                <p>Pour me décrire en quelques mots, je suis un :<br/></p>
            </header>
            <div className={"description"}>
                <ul>
                    <li><span>Geek</span> : l’informatique est un domaine qui me passionne dans tous ses aspects (développement web, programmation orienté objet ou encore montage / réparation d'ordinateurs), avec tout de même une préférence pour développement (le code quoi !).</li>
                    <li><span>Sportif</span> : j'adore le ski, qui est pour moi source de liberté et de vitalité. Passé la saison hivernale je m'oriente vers un autre sport de montagne, le VTT de descente (DH, Enduro). Et pour rester en forme toute l'année, rien de mieux qu'un peu de musculation !</li>
                    <li><span>Bricoleur</span> : mes mains ne sont pas simplement à l'aise sur un clavier 😉, elles le sont aussi dans des activités manuelles (restanque en pierre, cabane dans les arbres mais aussi jardinage et rénovation de petits engins agricoles).</li>
                </ul>
            </div>
        </section>
    );
};

export default ContentAbout;