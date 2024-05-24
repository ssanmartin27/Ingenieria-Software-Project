import React from 'react';
import './styles/Options.css';

function OptionAutomationControl() {
  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column' }}>
          <Link style={{ fontWeight: 'bold', color: 'black' }} href='#'>Openers - Operators</Link>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Link style={{ color: 'grey' }} href=''>Ramset</Link>
              <Link style={{ color: 'grey' }} href='#'>FAAC</Link>
              <Link style={{ color: 'grey' }} href='#'>Apollo</Link>
              <Link style={{ color: 'grey' }} href='#'>BFT</Link>
              <Link style={{ color: 'grey' }} href='#'>Power Master</Link>
              <Link style={{ color: 'grey' }} href='/PlatinumGateOpeners'>Platinium Gate Openers</Link>
              <Link style={{ color: 'grey' }} href='/LiftMaster'>Liftmaster</Link>
              <Link style={{ color: 'grey' }} href='#'>Elite</Link>
              <Link style={{ color: 'grey' }} href='#'>Doorking</Link>
            </div>
            <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column' }}>
              <Link style={{ color: 'grey' }} href='/OSCO'>OSCO</Link>
              <Link style={{ color: 'grey' }} href='/Allstar'>Allstar</Link>
              <Link style={{ color: 'grey' }} href='#'>Viking</Link>
              <Link style={{ color: 'grey' }} href='#'>Eagle</Link>
              <Link style={{ color: 'grey' }} href='/SEA'>SEA</Link>
              <Link style={{ color: 'grey' }} href='#'>Hysecurity</Link>
            </div>
          </div>


        </div>
        <div style={{ marginLeft: '8rem', display: 'flex', flexDirection: 'column' }}>
          <Link style={{ fontWeight: 'bold', color: 'black' }} href='#'>Remote Controls</Link>
          <Link style={{ color: 'grey' }} href='/Multi-Code'>Multi-Code</Link>
          <Link style={{ color: 'grey' }} href='#'>Transmitter Solutions</Link>
          <Link style={{ color: 'grey' }} href='#'>Transmitter Solutions</Link>
          <Link style={{ color: 'grey' }} href='#'>Linear</Link>
          <Link style={{ color: 'grey' }} href='/LiftMaster'>LiftMaster</Link>
          <Link style={{ color: 'grey' }} href='#'>Doorking</Link>
          <Link style={{ color: 'grey' }} href='#'>Keyston - Heddolf</Link>
          <Link style={{ color: 'grey' }} href='#'>BFT - SEA - FAAC</Link>
          <Link style={{ color: 'grey' }} href='/Long-Range'>Long Range</Link>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginLeft: '8rem', display: 'flex', flexDirection: 'column' }}>
            <Link style={{ fontWeight: 'bold', color: 'black' }} href='#'>Receivers</Link>
            <Link style={{ color: 'grey' }} href='#'>Linear/Multi-Code</Link>
            <Link style={{ color: 'grey' }} href='/Receivers'>Doorking</Link>
            <Link style={{ color: 'grey' }} href='/LiftMaster'>LiftMaster</Link>
            <Link style={{ color: 'grey' }} href='#'>Keystone/Heddolf</Link>
            <Link style={{ color: 'grey' }} href='/Long-Range'>Long Range</Link>
          </div>
          <div style={{ marginLeft: '8rem', display: 'flex', flexDirection: 'column' }}>
            <Link style={{ fontWeight: 'bold', color: 'black' }} href='#'>Telephone Entry</Link>
            <Link style={{ color: 'grey' }} href='#'>Select Engineering</Link>
            <Link style={{ color: 'grey' }} href='#'>Doorking</Link>
            <Link style={{ color: 'grey' }} href='#'>LiftMaster</Link>
            <Link style={{ color: 'grey' }} href='/Sentex'>Sentex</Link>
            <Link style={{ color: 'grey' }} href='/Elite'>Elite</Link>
            <Link style={{ color: 'grey' }} href='#'>Linear</Link>
            <Link style={{ color: 'grey' }} href='#'>Readers</Link>
            <Link style={{ color: 'grey' }} href='#'>Keypads</Link>
            <Link style={{ color: 'grey' }} href='#'>IP Voice over Internet</Link>
            <Link style={{ color: 'grey' }} href='#'>American Access System</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionAutomationControl;
