import React from 'react';
import './App.css';
import ContactDiv from "./components/ContactDiv";
import Tagline from "./components/Tagline";

function App() {
  return (
    <div className="App">
        <div className="main">
            <div>
                <h1 className="h1">Lee Jia Le | SUTD</h1>
                <div className="typewriter">
                    <Tagline/>
                </div>
                <br/>
                <ContactDiv/>
            </div>
        </div>
    </div>
  );
}

export default App;
