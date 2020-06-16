import React from "react";
import '../App.css';
import Typewriter from 'typewriter-effect';

function Tagline() {
    return (
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                    .pauseFor(1000)
                    .typeString('Full-Stack |')
                    .pauseFor(500)
                    .typeString('  Coder |')
                    .pauseFor(500)
                    .typeString(' Programmer')
                    .pauseFor(800)
                    .deleteChars(10)
                    .typeString('Blockchain')
                    .pauseFor(800)
                    .deleteChars(10)
                    .typeString('Cloud Computing')
                    .pauseFor(800)
                    .deleteChars(15)
                    .typeString('Avid Learner')
                    .pauseFor(1000)
                    .start();
            }}
        />
    )
}

export default Tagline;