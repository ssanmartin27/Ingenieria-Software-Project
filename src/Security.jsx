import React from 'react';
import './styles/Options.css';

function OptionSecurity() {
    return (
        <div>
            <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column'}}>
                    <a style={{ fontWeight: 'bold', color: 'black' }} href='#'>Safety Equipment</a>
                    <a style={{ color: 'grey' }} href='#'>Safety Loops</a>
                    <a style={{ color: 'grey' }} href='/Loop'>Loop Detector</a>
                    <a style={{ color: 'grey' }} href='#'>Safety Photo Cell</a>
                </div>
        </div>
    );
}

export default OptionSecurity;
