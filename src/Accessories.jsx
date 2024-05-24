import React from 'react';
import './styles/Options.css';
import {Link} from 'react-router-dom'

function OptionAccesories() {
    return (
        <div>
            <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column' }}>
                    <Link style={{ fontWeight: 'bold', color: 'black' }}>Gate Accessories</Link>
                    <Link style={{ color: 'grey' }} href='/Cantilever-Wheels'>Cantilever Wheels</Link>
                    <Link style={{ color: 'grey' }}>VTrack - Guide - Vwheels</Link>
                    <Link style={{ color: 'grey' }}>Hinges</Link>
                    <Link style={{ color: 'grey' }} href='/Locks-Latches'>Locks - Latches</Link>
                </div>
        </div>
    );
}

export default OptionAccesories;
