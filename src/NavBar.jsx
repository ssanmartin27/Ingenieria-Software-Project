import React, { useState } from 'react';
import OptionAccesories from './Accessories';
import OptionAutomationControl from './AutomationControl';
import OptionsComponent from './Products';
import OptionSecurity from './Security';
import './styles/navbar.css';
import {Link} from 'react-router-dom'

function Navbar() {
  const [isMenuOpenProducts, setIsMenuOpenProducts] = useState(false);
  const [isMenuOpenAutomation, setIsMenuOpenAutomation] = useState(false);
  const [isMenuOpenSecurity, setIsMenuOpenSecurity] = useState(false);
  const [isMenuOpenAccesories, setIsMenuOpenAccesories] = useState(false);

  const toggleMenuProducts = (event) => {
    event.preventDefault();
    setIsMenuOpenProducts(!isMenuOpenProducts);
    setIsMenuOpenAutomation(false);
    setIsMenuOpenSecurity(false);
    setIsMenuOpenAccesories(false);
  };
  
  const toggleMenuAutomation = (event) => {
    event.preventDefault();
    setIsMenuOpenAutomation(!isMenuOpenAutomation);
    setIsMenuOpenProducts(false);
    setIsMenuOpenSecurity(false);
    setIsMenuOpenAccesories(false);
  };
  
  const toggleMenuSecurity = (event) => {
    event.preventDefault();
    setIsMenuOpenSecurity(!isMenuOpenSecurity);
    setIsMenuOpenProducts(false);
    setIsMenuOpenAutomation(false);
    setIsMenuOpenAccesories(false);
  };

  const toggleMenuAccesories = (event) => {
    event.preventDefault();
    setIsMenuOpenAccesories(!isMenuOpenAccesories);
    setIsMenuOpenProducts(false);
    setIsMenuOpenAutomation(false);
    setIsMenuOpenSecurity(false)
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{position:'fixed-top'}}>
      <div className="container-fluid">
        <Link style={{marginLeft: '40px'}} className="navbar-brand fs-3" to="/">GATESNFENCES</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className={`nav-link ${isMenuOpenProducts ? 'active' : ''}`} to="#" onClick={toggleMenuProducts}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isMenuOpenAutomation ? 'active' : ''}`} to="#" onClick={toggleMenuAutomation}>Automation and control</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={toggleMenuSecurity}>Security</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={toggleMenuAccesories}>Accessories</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`dropdown-menu ${isMenuOpenProducts ? 'show' : ''}`}>
        <OptionsComponent/>
      </div>
      <div className={`dropdown-menu ${isMenuOpenAutomation ? 'show' : ''}`}>
        <OptionAutomationControl/>
      </div>
      <div className={`dropdown-menu ${isMenuOpenSecurity ? 'show' : ''}`}>
        <OptionSecurity/>
      </div>
      <div className={`dropdown-menu ${isMenuOpenAccesories ? 'show' : ''}`}>
        <OptionAccesories/>
      </div>

    </nav>
  );
}

export default Navbar;
