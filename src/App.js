import React, {Fragment, lazy, Suspense,useEffect,useRef,useState} from 'react';

import './bootstrap.css'
import Navbar from "./Components/layout/Navbar";
import WelcomePage from "./Components/sections/Welcome /WelcomePage";
import AboutMe from "./Components/sections/About Me/AboutMe";
const ContactMe = lazy(() => import('./Components/sections/About Me/ContactMe'))
const Projects = lazy(() => import('./Components/sections/Projects/Projects'))
const Skills = lazy(() => import('./Components/sections/About Me/Skills'))
const Footer = lazy(() => import('./Components/layout/Footer'))
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
        <Fragment>
            <Navbar/>
            <WelcomePage/>
            {window.innerWidth<960&&<div ref={ref}></div>}
            <AboutMe/>
            {window.innerWidth>=960&&<div ref={ref}></div>}
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