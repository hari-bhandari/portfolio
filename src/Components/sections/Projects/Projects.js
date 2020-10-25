import React, {useCallback, useEffect, useRef, useState} from 'react';
import Project from "./Project";
import {projects} from "./projectsList";
const useOnScreen = (options) => {
    const [visible, setVisible] = useState(false)
    const ref = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (visible) {
            } else {
                setVisible(entry.isIntersecting)
                console.log(entry.isIntersecting)
            }

        }, options)
        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [ref, options])
    return [ref, visible]
}

const Projects = () => {
    const[maximumValue,setMazimumValue]=useState(2)

    const observer=useRef()
    const lastBookElementRef=useCallback(node=>{
        if(observer.current) observer.current.disconnect()
        observer.current=new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                console.log('visible')
            }

        })
        if(node) observer.current

    })
    const [ref,visible]=useOnScreen({rootMargin:'0px','threshold':'0.75'})
    useEffect(()=>{
        console.log(visible)
    },[visible])

    return (
        <div id={"projects"} className="background">
            {projects.map((value, index) => {

                if (index < maximumValue) {
                    if(index=maximumValue-1){
                        return (<div ref={ref}><Project title={value.title} description={value.description} picture={value.picture}
                                              mode={value.mode} key={index} demo={value.demo}/></div>)
                    }
                    return (<Project title={value.title} description={value.description} picture={value.picture}
                                     mode={value.mode} key={index} demo={value.demo}/>)
                }
                else
                {
                    return
                }

            })}
        </div>
    );
};

export default Projects;