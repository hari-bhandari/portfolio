import React, {useState} from 'react';
import Project from "./Project";
import {projects} from "./projectsList";

const Projects = () => {
    const [maximumValue,setMaximumValue]=useState(2)


    return (
        <div id={"projects"} className="background">
            {projects.map((value,index) =>(
                <Project title={value.title} description={value.description} picture={value.picture} mode={value.mode} key={index} demo={value.demo}/>
            ))}
        </div>
    );
};

export default Projects;