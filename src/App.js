import React from 'react';
import './App.css';
import ContactDiv from "./ContactDiv";
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
        <div className="main">
            <div>
                <h1 className="h1">Lee Jia Le | SUTD</h1>
                <div className="typewriter">
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
                </div>
                <br/>
                <ContactDiv/>
            </div>
        </div>
    </div>
  );
}

export default App;
