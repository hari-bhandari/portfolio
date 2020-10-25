import React, {Fragment, lazy, Suspense} from 'react';

import Navbar from "./Components/layout/Navbar";
import WelcomePage from "./Components/sections/welcome/WelcomePage";
import './bootstrap.css'
const AboutMe=lazy(()=>import('./Components/sections/About Me/AboutMe'))
const ContactMe = lazy(() => import('./Components/sections/About Me/ContactMe'))
const Projects = lazy(() => import('./Components/sections/Projects/Projects'))
const Skills = lazy(() => import('./Components/sections/About Me/Skills'))
const Footer = lazy(() => import('./Components/layout/Footer'))
function App() {

    return (
        <Fragment>
                <Navbar/>
                <WelcomePage/>
            <Suspense fallback={<div>. </div>}>
                <AboutMe/>
            </Suspense>
            <Suspense fallback={<div>. </div>}>
                <Skills/>
            </Suspense>
            <Suspense fallback={<div>. </div>}>
                (<Projects/>)
            </Suspense>
            <Suspense fallback={<div>. </div>}>
                <ContactMe/>
            </Suspense>
            <Suspense fallback={<div>. </div>}>
                <Footer/>
            </Suspense>
        </Fragment>
    );
}

export default App;