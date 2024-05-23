import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import ReadMoreButton from './ReadMoreButton';
import './styles/ModernDrivewayGates.css';

function ModernDrivewayGates() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '100px' }}>
        <img src="/reja6.jpeg" alt="reja6" width={'100%'} />
        <h1>
          Modern Driveway Gates
        </h1>
        <p className="text-secondary fs-5">
          L. A. Ornamental offers a wide selection of decorative custom driveway gates in Aluminum  <br />
          or Wrought Metals. Our quality aluminum gates offer elegance, security, safety, and <br />
          complete satisfaction to our customers. We offer a large selection of designs to choose <br />
          from, but we can manufacture your custom made design if you produce the design to us.
        </p>
        <h2>Choose from a great selection of Security Gates and Safety <br />
          Gates
        </h2>
        <p className='text-secondary'>
          As we specialize in Front Driveway Entrance or Entry Gates, our aluminum and wrought Iron <br />
          Driveway Gates are custom built to jobsite specifications and can be ordered in grades <br />
          ranging from Residential to Commercial.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15rem' }}>
          <div style={{ textAlign: 'left' }}>
            <h2>Custom Aluminum Gate</h2>
            <p className='text-secondary'>
              Driveway gates are the first defense that <br />
              your home has against unwanted intruders. <br />
              This Driveway gates with a Island Thyme is <br />
              Custom made according to <br />
              the wishes of a home owner.
            </p>
            <div style={{ marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/reja1.jpeg" alt="reja1" style={{ width: '25rem', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/reja2.jpeg" alt="reja2" style={{ width: '35rem', height: 'auto', objectFit: 'contain', marginLeft: '10rem' }} />
          </div>
          <div>
            <h2>Driveway Gates</h2>
            <p className='text-secondary'>
              Whether you want to create a grand <br />
              entrance or add privacy you’re sure to get <br />
              some great ideas from our photo gallery
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>

          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12rem' }}>
          <div>
            <h2>California Modern Stylish</h2>
            <p className='text-secondary'>
              A California Modern Stylish Safety Aluminum <br />
              Driveway Gate, strong jet light makes this <br />
              Gate the perfect Gate to use with a <br />
              Gate Opener.
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>

          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/reja3.jpeg" alt="reja3" style={{ width: '30rem', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>


        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/reja4.jpeg" alt="reja4" style={{ width: '30rem', height: 'auto', objectFit: 'contain', marginLeft: '10rem' }} />
          </div>
          <div>
            <h2>Front Entrance Driveway <br /> Gates</h2>
            <p className='text-secondary'>
              This Front Entrance Driveway Gates can be <br />
              made of Aluminum or Wrought Iron, Sliding or <br />
              Swing, Manual or Automatic.
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12rem' }}>
          <div>
            <h2>Metal Aluminum Driveway <br /> Gate</h2>
            <p className='text-secondary'>
              This Metal Driveway Gates Designs can be <br />
              made of Aluminum or Wrought Iron, Sliding or <br />
              Swing, Manual or Automatic.
            </p>
            <div style={{ textAlign: 'left', marginLeft: '100px' }}>
              <ReadMoreButton title={'Learn More'} />
            </div>

          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '100px' }}>
            <img src="/reja5.jpeg" alt="reja5" style={{ width: '30rem', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>

        
      </header>
      <Footer />
    </div>

  );
}

export default ModernDrivewayGates;
