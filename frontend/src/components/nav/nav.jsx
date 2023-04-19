import React from "react";
import '../styles/nav.css'

function Navigation() {
  return (
    <div>
      <nav className="flex-row" id="nav1">
        <h1 className="logo-head-nav" style={{fontSize:'33px'}}>Quora</h1>
        <div className="flex-row sections">
            <h5>About</h5>
            <h5>Careers</h5>
            <h5>Press</h5>
            <h5>Business</h5>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
