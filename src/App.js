import React, {Fragment, lazy, Suspense} from 'react';

import './bootstrap.css'
import Navbar from "./Components/layout/Navbar";

const ContactMe = lazy(() => import('./Components/sections/About Me/ContactMe'))
const WelcomePage = lazy(() => import('./Components/sections/Welcome /WelcomePage'))
const AboutMe = lazy(() => import('./Components/sections/About Me/AboutMe'))
const Projects = lazy(() => import('./Components/sections/Projects/Projects'))
const Skills = lazy(() => import('./Components/sections/About Me/Skills'))
const Footer = lazy(() => import('./Components/layout/Footer'))

function App() {
    const visible = (value) => {
        console.log(value)
    }
    return (

        <Fragment>


            <Suspense fallback={<div>loading...</div>}>
                <Navbar/>
            </Suspense>
            <Suspense fallback={<div> .</div>}>
                <WelcomePage/>
            </Suspense>
            <Suspense fallback={<div>Loading ...</div>}>
                <AboutMe Visible={visible}/>
            </Suspense>
            <Suspense fallback={<div>. </div>}>
                {visible && <Skills/>}
            </Suspense>
            <Suspense fallback={<div>. </div>}>
                {visible && (<Projects/>)}
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
