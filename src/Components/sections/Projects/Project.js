import React from 'react';
const Project = ({title,description,picture,mobile,demo,LightSpeed}) => {

    return (
        <section className={mobile?'portfolio-block mobile-app mt-3':"portfolio-block website mt-3"}>
            <div className={`container ${mobile?'':'align-items-center'}`}>
                <div className="row align-items-center">
                    {mobile ? (
                        <div className="col-md-12 col-lg-3 offset-lg-2">
                            <LightSpeed left>
                                <div className="portfolio-phone-mockup">
                                    <a aria-label="demo" href={demo}>
                                        <div className="phone-screen" style={{backgroundImage: `url(${picture})`}}/>
                                    </a>
                                    <div className="home-button"/>
                                </div>
                            </LightSpeed>
                        </div>
                    ) : (
                        <div className="col-md-12 col-lg-5 offset-lg-1 text text-lighter">
                            <h3>{title}</h3>
                            <p className="project-font-size">{description}</p>
                        </div>
                    )}
                    {!mobile?(
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
                        ):( <div className="col-md-12 col-lg-5 text-bolder">
                        <h3 >{title}</h3>
                        <p className="project-font-size">{description}</p>
                    </div>)}
                    }
                </div>
            </div>
        </section>
    );
};

export default Project;
