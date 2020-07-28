import React, {Fragment, Suspense, lazy, useState, useEffect} from 'react';

import './bootstrap.css'
import Footer from "./Components/layout/Footer";

const Navbar = lazy(() => import( "./Components/layout/Navbar"));
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
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Fragment>
            <Suspense fallback={<div>loading...</div>}>
                {!loaded ? (<div>Loading...</div>) : (
                    <div>
                        <Navbar/>
                        <WelcomePage/>
                        <AboutMe/>
                        <Skills/>
                        <Projects/>
                        <ContactMe/>
                    </div>
                )}



            </Suspense>
            <Footer/>


        </Fragment>
    );
}

export default App;
