import React from 'react';
import './DarkModeToggle.css'
const DarkModeToggle = () => {
    return (
        <div>
            <input type="checkbox" id="toggle"/>
            <label htmlFor="toggle"></label>
        </div>
    );
};

export default DarkModeToggle;