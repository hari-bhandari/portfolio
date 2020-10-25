import React, {useState} from 'react';
import logo from './logo.png'
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
    const[darkMode,setDarkMode]=useState(false)
    const darkColours=[
        ['--navbar-background', '#333333'],
        ['--background', '#333333'],
        ['--text-colour', '#dccece'],
        ['--text-intensed', '#f3f1f1'],
        ['--overlay-color','rgba(51, 51, 51, 0.95)'],
        ['--footer-background', '#333333']
    ]
    const dayColours=[
        ['--navbar-background', 'rgb(255, 255, 255)'],
        ['--background', 'rgb(255, 255, 255)'],
        ['--text-colour', '#312f2f'],
        ['--text-intensed', '#000000'],
        ['--overlay-color','rgba(50, 146, 166, 0.53)'],
        ['--footer-background', '#91e0ff']
    ]
    const changeRootElement=(name,property)=>{
        document.documentElement.style.setProperty(name, property)
    }
    const onChange=()=>{
        if(!darkMode) {
            darkColours.forEach(value => {
                changeRootElement(value[0],value[1])
            })

        }
        else if (darkMode){
            dayColours.forEach(value => {
                changeRootElement(value[0],value[1])
            })
        }
        localStorage.setItem('darkMode',!darkMode)
        setDarkMode(!darkMode)

    }
    return (
        <nav className="navbar navbar-expand-md  fixed-top py-4 navbar-light text-lighter" id="main-nav">
            <div className="container">
                <Link to="home" className="navbar-brand my-0" smooth={true} duration={500}>
                    <img src={logo} width="110" height="80" alt="logo"/>

                </Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" aria-label="hamburger">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto " >
                        <li className="nav-item">
                            <Link to="home" className={"nav-link"} smooth={true} duration={500}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about-me" className={"nav-link"} smooth={true} duration={500}>About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="skills" className={"nav-link"} smooth={true} duration={500}>Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="projects" className={"nav-link"} smooth={true} duration={500}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <span className={"nav-link"} data-toggle="modal" data-target="#contactModal">Contact me </span>
                        </li>

                        <li className="nav-item">
                            <div></div>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;