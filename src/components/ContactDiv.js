import React from 'react';
import '../App.css';
import { SocialIcon } from 'react-social-icons';

function ContactDiv() {
    return (
        <div className="horizontal">
            <div>
                <SocialIcon url="http://linkedin.com/in/leejiale" label="LinkedIn"  />
            </div>
            <div>
                <SocialIcon url="https://github.com/cre8tion" label="Github"  />
            </div>
            <div>
                <SocialIcon network="email" url="mailto:ljl1997@gmail.com" label="Email Address"/>
            </div>
        </div>
    );
}


export default ContactDiv;