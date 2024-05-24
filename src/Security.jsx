import React from 'react';
import {Link} from 'react-router-dom'
import './styles/Options.css';

function OptionSecurity() {
    return (
        <div>
            <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column'}}>
                    <Link style={{ fontWeight: 'bold', color: 'black' }} href='#'>Safety Equipment</Link>
                    <Link style={{ color: 'grey' }} href='#'>Safety Loops</Link>
                    <Link style={{ color: 'grey' }} href='/Loop'>Loop Detector</Link>
                    <Link style={{ color: 'grey' }} href='#'>Safety Photo Cell</Link>
                </div>
        </div>
    );
}

export default OptionSecurity;
