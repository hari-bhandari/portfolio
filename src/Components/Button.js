import React from 'react';
import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
const Button = ({text,onClick}) => {
    return (
        <div className="button-container" onClick={onClick}>
        <button className="button-btn"><FontAwesomeIcon icon={faAngleDown} style={{marginLeft:'2px'}}/>{text}</button>
        </div>
    );
};

export default Button;
