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
            <header>
                <h1>A propos de moi<span>.</span></h1>
                <p>Je m’appelle Guillaume Kusiak, est je suis actuellement étudiant en 1ère année de BUT<br/>
                    informatique dans l’IUT d’Aix-Marseille.</p>
                <p>Je suis une personne très simple, dont la vie est composée de plusieurs “ côté “ :<br/></p>
            </header>
            <p className={"description"}>
                <ul>
                    <li><span>Un côté geek</span>, notamment l’informatique avec tous ses aspects qui la compose, mais plus<br/> particulièrement le développement web.</li>
                    <li><span>Un côté sportif</span>, notamment avec le ski qui est pour moi une grande source d’inspiration,<br/> dans lequel j’ai acsquis durant de nombreuses années un excellent niveau.</li>
                    <li><span>Un côté bricoleur</span>, notamment dans la réalisation de restanque en pierre, d’une cabane<br/> perché en bois, de réparation et création de différents outils, ainsi qu’un aspect de<br/> jardinage</li>
                </ul>
            </p>
        </section>
    );
};

export default ContentAbout;