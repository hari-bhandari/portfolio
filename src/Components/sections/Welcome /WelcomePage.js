import React, {lazy,Suspense} from 'react';
import Fade from "react-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload ,faPhone} from '@fortawesome/free-solid-svg-icons'
const Coding = lazy(() => import( "./Coding"));

const WelcomePage = () => {
    return (
        <body id="home" className="py-5 " style={{width:'100%', overflow:'hidden'}}>
        <div className='primary-overlay text-white'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 d-lg-block text-center">
                        <h1 className="display-2 mt-5 pt-5">
                            Hari Bhandari
                        </h1>
                        <p className="welcome-page-font-size text-white ">Welcome to my Portfolio</p>
                        <a aria-label="cv" href="https://1drv.ms/w/s!AlhjcQhH4HlTgu96qRdZqE2NJP7Liw?e=3yIgVN " className="btn btn-outline-secondary btn-lg text-white">
                            <FontAwesomeIcon icon={faDownload}/> Download my CV
                        </a>
                        <a className="btn btn-outline-secondary btn-lg text-white mx-2"  data-toggle="modal" data-target="#contactModal" href='#contactModal'>
                            <FontAwesomeIcon icon={faPhone}/> Contact me
                        </a>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                        <Suspense fallback={<div>Loading</div>}>
                            {window.innerWidth >= 960 && <Fade bottom><Coding/></Fade>}
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
        </body>
    );
};

export default WelcomePage;