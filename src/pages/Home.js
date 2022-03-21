import React from 'react';
import Navigation from "../components/Navigation";
import ContentPresentation from "../components/ContentPresentation";
import ContentProjects from "../components/ContentProjects";
import ContentAbout from "../components/ContentAbout";
import ContentContact from "../components/ContentContact";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Navigation/>
            <ContentPresentation />
            <ContentProjects />
            <ContentAbout />
            <ContentContact />
            <Footer />
        </div>
    );
};

export default Home;