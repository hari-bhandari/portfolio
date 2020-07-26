import React, {Fragment, Suspense, lazy, useState,useEffect} from 'react';

import Navbar from "./Components/layout/Navbar";
import './bootstrap.css'
import Footer from "./Components/layout/Footer";
import ContactMe from "./Components/sections/About Me/ContactMe";
import WecomePage from "./Components/sections/Welcome /WecomePage";
const AboutMe = lazy(() => import('./Components/sections/About Me/AboutMe'))

const Projects = lazy(() => import('./Components/sections/Projects/Projects'))
const Skills = lazy(() => import('./Components/sections/About Me/Skills'))


function App() {
    const[loaded,setLoaded]=useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true)
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    return (
                <Fragment>
                    <Navbar/>
                    <WecomePage />
                    <Suspense fallback={<div>loading...</div>}>
                        {!loaded?(<div>Loading...</div>):(
                            <div>
                                <AboutMe />
                                <Skills />
                                <Projects />
                                <ContactMe/>
                            </div>
                        )}


                    </Suspense>
                    <Footer />
                </Fragment>
    );
}

export default App;
