import React, {Fragment, Suspense, lazy, useState, useEffect} from 'react';

import './bootstrap.css'
import Navbar from "./Components/layout/Navbar";

const Footer = lazy(() => import('./Components/layout/Footer'))
const ContactMe = lazy(() => import('./Components/sections/About Me/ContactMe'))
const WelcomePage = lazy(() => import('./Components/sections/Welcome /WecomePage'))
const AboutMe = lazy(() => import('./Components/sections/About Me/AboutMe'))
const Projects = lazy(() => import('./Components/sections/Projects/Projects'))
const Skills = lazy(() => import('./Components/sections/About Me/Skills'))


function App() {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true)
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Fragment>

            <Navbar/>
            <Suspense fallback={<div>loading...</div>}>
                {!loaded ? (<div>Loading...</div>) : (
                    <div>
                        <WelcomePage/>
                        <AboutMe/>
                        <Skills/>
                        <Projects/>
                        <ContactMe/>
                        <Footer/>
                    </div>
                )}


            </Suspense>

        </Fragment>
    );
}

export default App;
