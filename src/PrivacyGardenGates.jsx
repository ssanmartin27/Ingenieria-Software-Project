import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import ReadMoreButton from './ReadMoreButton';
import './styles/PrivacyGardenGates.css';

function PrivacyGardenGates() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '100px' }}>
        <img src="/reja6.jpeg" alt="reja6" width={'100%'} />
        <h1>
          Privacy Garden Gates
        </h1>
        <p className="text-secondary fs-5">
          L. A. Ornamental Corp offers garden gates with different styles and designs to suit your <br />
          decor needs for an elegant, classic garden entryway gate. Our garden gates are constructed <br />
          of aluminum or wrought iron for longevity and frequent use but have open designs to allow a <br />
          better view and air circulation to the entryway or walk way.
        </p>
        <h2>Choose from a large selection of <br />
          powder coated colors which <br />
          withstand years of weather <br />
          conditions.
        </h2>


        <div style={{ display: 'flex', alignItems: 'center', gap: '15rem' }}>
          <div style={{ textAlign: 'left' }}>
            <h2>Royal Seal</h2>
            <p className='text-secondary'>
              This Lovely Design has a metal backing for <br />
              privacy another version of this design is with <br />
              the backing in just the lower part of the gate.
            </p>
            <div style={{ marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/reja7.jpeg" alt="reja7" style={{ width: '25rem', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/reja8.jpeg" alt="reja8" style={{ width: '25rem', height: 'auto', objectFit: 'contain', marginLeft: '10rem' }} />
          </div>
          <div>
            <h2>Gem Stone</h2>
            <p className='text-secondary'>
              Have you been seeking high quality, <br />
              ornamental ALUMINUM gates? Then you <br />
              have come to the right place!.
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>

          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12rem' }}>
          <div>
            <h2>Morning Rose</h2>
            <p className='text-secondary'>
              These beautifully designed gates add an <br />
              elegance all their own. They are lightweight <br />
              and nearly maintenance free they are perfect <br />
              for areas in corrosive climates and clients <br />
              who enjoy the very intricate and ornate <br />
              designs cast metals can offer.
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>

          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/reja9.jpeg" alt="reja9" style={{ width: '30rem', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>


        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/reja10.jpeg" alt="reja10" style={{ width: '30rem', height: 'auto', objectFit: 'contain', marginLeft: '10rem' }} />
          </div>
          <div>
            <h2>Wave of Elegance</h2>
            <p className='text-secondary'>
              This Lovely Design has a metal backing for <br />
              privacy anotheL. A. Ornamental Corp offers <br />
              garden gates with different styles and <br />
              designs to suit your decor needs <br />
              for an elegant, classic garden entryway <br />
              gate.r version of this design is with the <br />
              backing in just the lower part of the gate.
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12rem' }}>
          <div>
            <h2>Modern Square <br /> Gate</h2>
            <p className='text-secondary'>
              Gate Hardware Quality like stainless steel <br />
              screws, stainless steel spring hinges, <br />
              stainless steel gate latch is a must to make <br />
              sure that your fence gate will performing its <br />
              best and will last for a long time.
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>

          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/reja11.jpeg" alt="reja11" style={{ width: '30rem', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/reja12.jpeg" alt="reja12" style={{ width: '30rem', height: 'auto', objectFit: 'contain', marginLeft: '10rem' }} />
          </div>
          <div>
            <h2>Artistic Iron</h2>
            <p className='text-secondary'>
              Artistic wrought iron style adds class to any <br />
              commercial or residential driveway, garden or <br />
              entrance while enhancing the privacy and <br />
              security without the worries of Maintanance.
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12rem' }}>
          <div>
          <h2>Oasis</h2>
            <p className='text-secondary'>
              The backing Material use on this particular <br />
              gate is Krinklglas. The newest and most <br />
              versatile stained glass applications are not <br />
              really glass at all.
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>

          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/reja13.jpeg" alt="reja13" style={{ width: '30rem', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/reja14.jpeg" alt="reja14" style={{ width: '30rem', height: 'auto', objectFit: 'contain', marginLeft: '10rem' }} />
          </div>
          <div>
            <h2>Arch with Heart</h2>
            <p className='text-secondary'>
              The exterior impression of your property <br />
              becomes more authoritative and majestic <br />
              with a gate. If you have one-of-a-kind <br />
              landscaping, then this gate will make one of <br />
              a kind Privacy Driveway Gate.
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>
          </div>
        </div>

        

        <div style={{ display: 'flex', alignItems: 'center', gap: '12rem' }}>
          <div>
            <h2>Arch Vine</h2>
            <p className='text-secondary'>
              For security and privacy in your home, <br />
              choose an attractive Custom Privacy <br />
              driveway gate from the wide <br />
              selection available on our web site.
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>

          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/reja15.jpeg" alt="reja15" style={{ width: '30rem', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>
      </header>
      <Footer />
    </div>

  );
}

export default PrivacyGardenGates;
