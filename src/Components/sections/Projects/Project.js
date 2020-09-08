import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
const Project = ({title,description,picture,mode,demo}) => {
    if(mode==='mobile'){
        return(

            <section className="portfolio-block mobile-app mt-3">
                <div className="container align-items-center">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-3 offset-lg-2">
                            <LightSpeed left>
                            <div className="portfolio-phone-mockup">
                                <a aria-label="demo" href={demo}>
                                <div className="phone-screen" style={{backgroundImage:`url(${picture})`}}/>
                                </a>
                                <div className="home-button"/>
                            </div>
                            </LightSpeed>
                        </div>
                        <div className="col-md-12 col-lg-5 text-bolder">
                            <h3 >{title}</h3>
                            <p className="project-font-size">{description}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    return (
        <section className="portfolio-block website mt-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 col-lg-5 offset-lg-1 text text-lighter">
                        <h3>{title}</h3>
                        <p className="project-font-size">{description}</p>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <LightSpeed right>

                        <div className="portfolio-laptop-mockup">
                            <div className="screen">
                                <a aria-label="demo" href={demo}>
                                <div className="screen-content" style={{backgroundImage:`url(${picture})`}}/>
                                </a>
                            </div>
                            <div className="keyboard"/>
                        </div>
                        </LightSpeed>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;