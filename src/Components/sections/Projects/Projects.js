import React, {useState} from 'react';
import Project from "./Project";
import LightSpeed from 'react-reveal/LightSpeed';
import {projects} from "./projectsList";
import Button from "../../Button";
const Projects = () => {
    const[maximum,setMaximum]=useState(false)
    const onLoadMore=()=>{
        setMaximum(!maximum)
    }
    return (
        <div id={"projects"} className="background">
            }}
            {projects.map((value, index) => {
                    if(index<3) {
                        return (<Project title={value.title} description={value.description} picture={value.picture}
                                         mobile={value.mobile} key={index} demo={value.demo} LightSpeed={LightSpeed}/>)
                    }

            })}
            {maximum&&projects.map((value, index) => {
                if(index>=3) {
                    return (<Project title={value.title} description={value.description} picture={value.picture}
                                     mobile={value.mobile} key={index} demo={value.demo} LightSpeed={LightSpeed}/>)
                }

            })}

            {!maximum&&(<Button text={"Load more projects"} onClick={onLoadMore}/>)}

        </div>
    );
};

export default Projects;
