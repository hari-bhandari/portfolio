import React, {Fragment, lazy, Suspense} from 'react';

import './bootstrap.css'
import Footer from "./Components/layout/Footer";
import Navbar from "./Components/layout/Navbar";
const ContactMe = lazy(() => import('./Components/sections/About Me/ContactMe'))
const WelcomePage = lazy(() => import('./Components/sections/Welcome /WelcomePage'))
const AboutMe = lazy(() => import('./Components/sections/About Me/AboutMe'))
const Projects = lazy(() => import('./Components/sections/Projects/Projects'))
const Skills = lazy(() => import('./Components/sections/About Me/Skills'))


function App() {


    return (
        <Fragment>
                <Navbar/>
            <Suspense fallback={<div>loading...</div>}>
                <WelcomePage/>
            </Suspense>
            <Suspense fallback={<div></div>}>
                <AboutMe/>
            </Suspense>
            <Suspense fallback={<div></div>}>
                <Skills/>
            </Suspense>

            <Suspense fallback={<div></div>}>
                <Projects/>
            </Suspense>
            <Suspense fallback={<div></div>}>
                <ContactMe/>
            </Suspense>

            <Footer/>


        </Fragment>
    );
}

export default App;
