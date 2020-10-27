import React, {useCallback, useEffect, useRef, useState} from 'react';
import Project from "./Project";
import {projects} from "./projectsList";
const Projects = () => {

    return (
        <div id={"projects"} className="background">
            {projects.map((value, index) => {

                    return (<Project title={value.title} description={value.description} picture={value.picture}
                                     mode={value.mode} key={index} demo={value.demo}/>)

            })}
        </div>
    );
};

export default Projects;