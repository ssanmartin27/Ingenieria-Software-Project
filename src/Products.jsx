import React from 'react';
import './styles/Options.css';
import {Link} from 'react-router-dom'

function OptionsComponent() {
  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '20px'}}>
        <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column'}}>
          <Link style={{ fontWeight: 'bold', color: 'black' }} to='#'>Driveway</Link>
          <Link style={{ color: 'grey' }} to='/ModernDriveWayGates'>Modern Driveway Gates</Link>
          <Link style={{ color: 'grey' }} to='#'>Custom Driveway Gates</Link>
          <Link style={{ color: 'grey' }} to='#'>Privacy Driveway Gates</Link>
        </div>
        <div style={{ marginLeft: '12.4rem', display: 'flex', flexDirection: 'column'}}>
          <Link style={{ fontWeight: 'bold', color: 'black' }} to='#'>Fencing</Link>
          <Link style={{ color: 'grey' }} to='/Fencing'>Fencing of Great World</Link>
        </div>
      </div>
      <div style={{ display: 'flex'}}>
        <div style={{  marginLeft: '4rem', display: 'flex', flexDirection: 'column'}}>
          <Link style={{ fontWeight: 'bold', color: 'black'}} to='#'>Garden Gates</Link>
          <Link style={{ color: 'grey' }} to='#'>Modern Garden Gates</Link>
          <Link style={{ color: 'grey' }} to='/PrivacyGardenGates'>Privacy Garden Gates</Link>
        </div>
        <div style={{ marginLeft: '13rem', display: 'flex', flexDirection: 'column'}}>
          <Link style={{ fontWeight: 'bold', color: 'black' }} to='#'>Railings</Link>
          <Link style={{ color: 'grey' }} to='/ModernBalconyRailings'>Modern Balcony Railings</Link>
        </div>
      </div>
    </div>
  );
}

export default OptionsComponent;
