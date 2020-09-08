import React, {Fragment, lazy, Suspense,useEffect,useRef,useState} from 'react';

import './bootstrap.css'
import Navbar from "./Components/layout/Navbar";
const ContactMe = lazy(() => import('./Components/sections/About Me/ContactMe'))
const WelcomePage = lazy(() => import('./Components/sections/Welcome /WelcomePage'))
const AboutMe = lazy(() => import('./Components/sections/About Me/AboutMe'))
const Projects = lazy(() => import('./Components/sections/Projects/Projects'))
const Skills = lazy(() => import('./Components/sections/About Me/Skills'))
const Footer = lazy(() => import('./Components/layout/Footer'))

function App() {

    return (
        <Fragment>
            <Navbar/>
            <Suspense fallback={<div>Loading.. </div>}>
            <WelcomePage/>
            </Suspense>
            <Suspense fallback={<div>Loading... </div>}>
            <AboutMe/>
            </Suspense>
            <Suspense fallback={<div></div>}>
                {<Skills/>}
            </Suspense>
            <Suspense fallback={<div></div>}>
                <Projects/>
            </Suspense>
            <Suspense fallback={<div></div>}>
                <ContactMe/>
            </Suspense>

            <Suspense fallback={<div>. </div>}>
                <Footer/>
            </Suspense>
        </Fragment>
            );
}

            export default App;
