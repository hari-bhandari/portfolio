import React from 'react';
import {Parallax} from "react-scroll-parallax";

const ParallaxText = () => {

    return (
        <div className="root">
            <div className="barTop"/>
            <span className="copy h1">
            {copy.map((letter, i) => (
                <Parallax
                    key={`copy-${i}`}
                    offsetXMax={100 * (i - 3)}
                    className="letter"
                >
                    {letter}
                </Parallax>
            ))}
        </span>
            <div className="barBottom"/>
        </div>
    );
};

export default ParallaxText;