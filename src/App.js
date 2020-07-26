import React, {Fragment, Suspense, lazy, useState, useEffect} from 'react';

import './bootstrap.css'
const Footer = lazy(() => import('./Components/layout/Footer'))
const ContactMe = lazy(() => import('./Components/sections/About Me/ContactMe'))
const Navbar = lazy(() => import('./Components/layout/Navbar'))
const WelcomePage = lazy(() => import('./Components/sections/Welcome /WecomePage'))
const AboutMe = lazy(() => import('./Components/sections/About Me/AboutMe'))
const Projects = lazy(() => import('./Components/sections/Projects/Projects'))
const Skills = lazy(() => import('./Components/sections/About Me/Skills'))


function App() {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true)
        }, 50);
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
                        <Footer/>
                    </div>
                )}


            </Suspense>

        </Fragment>
    );
}

export default App;
