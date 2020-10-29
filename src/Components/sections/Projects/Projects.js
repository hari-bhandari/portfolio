import React from 'react';
import Project from "./Project";
import LightSpeed from 'react-reveal/LightSpeed';
import {projects} from "./projectsList";
const Projects = () => {

    return (
        <div id={"projects"} className="background">
            }}
            {projects.map((value, index) => {
                    if(index<3) {
                        return (<Project title={value.title} description={value.description} picture={value.picture}
                                         mobile={value.mobile} key={index} demo={value.demo} LightSpeed={LightSpeed}/>)
                    }

            })}

        </div>
    );
};

export default Projects;
