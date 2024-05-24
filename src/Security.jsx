import React from 'react';
import {Link} from 'react-router-dom'
import './styles/Options.css';

function OptionSecurity() {
    return (
        <div>
            <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column'}}>
                    <Link style={{ fontWeight: 'bold', color: 'black' }} to='#'>Safety Equipment</Link>
                    <Link style={{ color: 'grey' }} to='#'>Safety Loops</Link>
                    <Link style={{ color: 'grey' }} to='/Loop'>Loop Detector</Link>
                    <Link style={{ color: 'grey' }} to='#'>Safety Photo Cell</Link>
                </div>
        </div>
    );
}

export default OptionSecurity;
