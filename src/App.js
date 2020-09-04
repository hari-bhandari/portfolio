import React, {Fragment, lazy, Suspense, useEffect, useRef, useState} from 'react';

import './bootstrap.css'
import Footer from "./Components/layout/Footer";
import Navbar from "./Components/layout/Navbar";
import WelcomePage from "./Components/sections/Welcome /WelcomePage";
import AboutMe from "./Components/sections/About Me/AboutMe";
import Projects from "./Components/sections/Projects/Projects";
import {ParallaxProvider} from 'react-scroll-parallax';

const ContactMe = lazy(() => import('./Components/sections/About Me/ContactMe'))
const Skills = lazy(() => import('./Components/sections/About Me/Skills'))
const useOnScreen = (options) => {
    const [visible, setVisible] = useState(false)
    const ref = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (visible) {
            } else {
                setVisible(entry.isIntersecting)
            }

        },options)
        if(ref.current){
            observer.observe(ref.current)
        }

        return ()=>{
            if(ref.current){
                observer.unobserve(ref.current)
            }
        }
    },[ref,options])
    return [ref,visible]
}

function App() {
    const [ref,visible]=useOnScreen({rootMargin:'0px','threshold':'0.75'})
    return (
        <ParallaxProvider>
            <Fragment>

                <Navbar/>

                <WelcomePage/>
                <AboutMe/>
                <div ref={ref}></div>
                <Suspense fallback={<div></div>}>
                {visible&&<Skills/>}
                </Suspense>
                {visible&&(<Projects/>)}
                <Suspense fallback={<div></div>}>
                    {visible&&<ContactMe/>}
                </Suspense>
                <Footer/>
            </Fragment>
        </ParallaxProvider>
            );
}

            export default App;
