import React from 'react';


const ProjectContainer = props => {
    return (
        <section className={"container"} onClick={() => {window.open(props.url, "_blank")}}>
            <img src={props.link}/>
            <div className="description">
                <h2><span>&lt; </span>{props.description}<span> /&gt;</span></h2>
            </div>
        </section>
    );
};

export default ProjectContainer;