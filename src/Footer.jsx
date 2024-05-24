// src/components/Footer.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './styles/Footer.css';

function Footer() {
    return (
      
      <footer className="bg-white text-dark py-4" style={{ marginTop: '100px', marginBottom: '100px' }}>
        <hr />
        <div className="container" style={{marginTop: '100px'}}>
          <div className="row">
            <div className="col-md-6">
              <h5>GATESNFENCES</h5>
            </div>
            <div className="col-md-6 text-right">
              <div className="row">
                <div className="col-4">
                  <ul className="list-unstyled">
                    <li><Link href="#link1" className="text-dark">About Us</Link></li>
                    <li className="footer-link"><Link href="#link2" className="text-dark">FAQ</Link></li>
                  </ul>
                </div>
                <div className="col-4">
                  <ul className="list-unstyled">
                    <li><Link href="#link3" className="text-dark">Contact Us</Link></li>
                    <li className="footer-link"><Link href="#link4" className="text-dark">Manufactures</Link></li>
                  </ul>
                </div>
                <div className="col-4">
                  <ul className="list-unstyled">
                    <li><Link href="#link5" className="text-dark" style={{textDecoration: 'none'}}>Our Policies</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
export default Footer;

