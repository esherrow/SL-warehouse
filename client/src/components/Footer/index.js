import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
    <Link to="/" className="navbar-brand text-lg font-effect-shadow-multiple">S&L Warehouse</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

    <div className="navbar-nav justify-space-between-lg justify-center align-center">
      <p>PHONE</p>
      <div className="justify-space-between-lg justify-center align-center">FACEBOOK</div>
    </div>
    </div>
    </div>
    </nav>
  );
}

export default Footer;