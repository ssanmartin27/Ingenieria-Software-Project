import React from 'react';
import './styles/Options.css';
import {Link} from 'react-router-dom'

function OptionsComponent() {
  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '20px'}}>
        <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column'}}>
          <Link style={{ fontWeight: 'bold', color: 'black' }} href='#'>Driveway</Link>
          <Link style={{ color: 'grey' }} href='/ModernDriveWayGates'>Modern Driveway Gates</Link>
          <Link style={{ color: 'grey' }} href='#'>Custom Driveway Gates</Link>
          <Link style={{ color: 'grey' }} href='#'>Privacy Driveway Gates</Link>
        </div>
        <div style={{ marginLeft: '12.4rem', display: 'flex', flexDirection: 'column'}}>
          <Link style={{ fontWeight: 'bold', color: 'black' }} href='#'>Fencing</Link>
          <Link style={{ color: 'grey' }} href='/Fencing'>Fencing of Great World</Link>
        </div>
      </div>
      <div style={{ display: 'flex'}}>
        <div style={{  marginLeft: '4rem', display: 'flex', flexDirection: 'column'}}>
          <Link style={{ fontWeight: 'bold', color: 'black'}} href='#'>Garden Gates</Link>
          <Link style={{ color: 'grey' }} href='#'>Modern Garden Gates</Link>
          <Link style={{ color: 'grey' }} href='/PrivacyGardenGates'>Privacy Garden Gates</Link>
        </div>
        <div style={{ marginLeft: '13rem', display: 'flex', flexDirection: 'column'}}>
          <Link style={{ fontWeight: 'bold', color: 'black' }} href='#'>Railings</Link>
          <Link style={{ color: 'grey' }} href='/ModernBalconyRailings'>Modern Balcony Railings</Link>
        </div>
      </div>
    </div>
  );
}

export default OptionsComponent;
