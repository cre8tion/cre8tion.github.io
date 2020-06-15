import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';

function ContactDiv() {
    return (
        <div className="horizontal">
            <div>
                <SocialIcon url="http://linkedin.com/in/leejiale" />
            </div>
            <div>
                <SocialIcon url="https://github.com/cre8tion" />
            </div>
            <div>
                <SocialIcon network="email" url="mailto:ljl1997@gmail.com"/>
            </div>
        </div>
    );
}


export default ContactDiv;