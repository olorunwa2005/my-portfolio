import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import OngoingCourse from '../components/OngoingCourse';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <OngoingCourse />
            <Contact />
        </main>
    );
};

export default Home;
