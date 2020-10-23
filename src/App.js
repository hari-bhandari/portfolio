import React, {Fragment, lazy, Suspense} from 'react';

import './bootstrap.css'
const WelcomePage=lazy(()=>import('./Components/sections/welcome/WelcomePage'))
const Navbar=lazy(()=>import('./Components/layout/Navbar'))
const AboutMe=lazy(()=>import('./Components/sections/About Me/AboutMe'))
const ContactMe = lazy(() => import('./Components/sections/About Me/ContactMe'))
const Projects = lazy(() => import('./Components/sections/Projects/Projects'))
const Skills = lazy(() => import('./Components/sections/About Me/Skills'))
const Footer = lazy(() => import('./Components/layout/Footer'))
function App() {

    return (
        <Fragment>
            <Suspense fallback={<div>. </div>}>
                <Navbar/>
            </Suspense>
            <Suspense fallback={<div>. </div>}>
                <WelcomePage/>
            </Suspense>
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