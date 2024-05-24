import React from 'react';
import './styles/Options.css';
import {Link} from 'react-router-dom'

function OptionAutomationControl() {
  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column' }}>
          <Link style={{ fontWeight: 'bold', color: 'black' }} to='#'>Openers - Operators</Link>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Link style={{ color: 'grey' }} to=''>Ramset</Link>
              <Link style={{ color: 'grey' }} to='#'>FAAC</Link>
              <Link style={{ color: 'grey' }} to='#'>Apollo</Link>
              <Link style={{ color: 'grey' }} to='#'>BFT</Link>
              <Link style={{ color: 'grey' }} to='#'>Power Master</Link>
              <Link style={{ color: 'grey' }} to='/PlatinumGateOpeners'>Platinium Gate Openers</Link>
              <Link style={{ color: 'grey' }} to='/LiftMaster'>Liftmaster</Link>
              <Link style={{ color: 'grey' }} to='#'>Elite</Link>
              <Link style={{ color: 'grey' }} to='#'>Doorking</Link>
            </div>
            <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column' }}>
              <Link style={{ color: 'grey' }} to='/OSCO'>OSCO</Link>
              <Link style={{ color: 'grey' }} to='/Allstar'>Allstar</Link>
              <Link style={{ color: 'grey' }} to='#'>Viking</Link>
              <Link style={{ color: 'grey' }} to='#'>Eagle</Link>
              <Link style={{ color: 'grey' }} to='/SEA'>SEA</Link>
              <Link style={{ color: 'grey' }} to='#'>Hysecurity</Link>
            </div>
          </div>


        </div>
        <div style={{ marginLeft: '8rem', display: 'flex', flexDirection: 'column' }}>
          <Link style={{ fontWeight: 'bold', color: 'black' }} to='#'>Remote Controls</Link>
          <Link style={{ color: 'grey' }} to='/Multi-Code'>Multi-Code</Link>
          <Link style={{ color: 'grey' }} to='#'>Transmitter Solutions</Link>
          <Link style={{ color: 'grey' }} to='#'>Transmitter Solutions</Link>
          <Link style={{ color: 'grey' }} to='#'>Linear</Link>
          <Link style={{ color: 'grey' }} to='/LiftMaster'>LiftMaster</Link>
          <Link style={{ color: 'grey' }} to='#'>Doorking</Link>
          <Link style={{ color: 'grey' }} to='#'>Keyston - Heddolf</Link>
          <Link style={{ color: 'grey' }} to='#'>BFT - SEA - FAAC</Link>
          <Link style={{ color: 'grey' }} to='/Long-Range'>Long Range</Link>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginLeft: '8rem', display: 'flex', flexDirection: 'column' }}>
            <Link style={{ fontWeight: 'bold', color: 'black' }} to='#'>Receivers</Link>
            <Link style={{ color: 'grey' }} to='#'>Linear/Multi-Code</Link>
            <Link style={{ color: 'grey' }} to='/Receivers'>Doorking</Link>
            <Link style={{ color: 'grey' }} to='/LiftMaster'>LiftMaster</Link>
            <Link style={{ color: 'grey' }} to='#'>Keystone/Heddolf</Link>
            <Link style={{ color: 'grey' }} to='/Long-Range'>Long Range</Link>
          </div>
          <div style={{ marginLeft: '8rem', display: 'flex', flexDirection: 'column' }}>
            <Link style={{ fontWeight: 'bold', color: 'black' }} to='#'>Telephone Entry</Link>
            <Link style={{ color: 'grey' }} to='#'>Select Engineering</Link>
            <Link style={{ color: 'grey' }} to='#'>Doorking</Link>
            <Link style={{ color: 'grey' }} to='#'>LiftMaster</Link>
            <Link style={{ color: 'grey' }} to='/Sentex'>Sentex</Link>
            <Link style={{ color: 'grey' }} to='/Elite'>Elite</Link>
            <Link style={{ color: 'grey' }} to='#'>Linear</Link>
            <Link style={{ color: 'grey' }} to='#'>Readers</Link>
            <Link style={{ color: 'grey' }} to='#'>Keypads</Link>
            <Link style={{ color: 'grey' }} to='#'>IP Voice over Internet</Link>
            <Link style={{ color: 'grey' }} to='#'>American Access System</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionAutomationControl;
