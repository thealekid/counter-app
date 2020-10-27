import React from 'react'

// Functional components are mostly used when dealing with stateless components

const NavBar = ({ totalCounters }) => {
        console.log("NavBar-rendered")
        return (
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
            Navbar{" "}
        <span className="badge badge-pill badge-secondary">
            {totalCounters}
        </span>
        </a>
      </nav>
      );
}


 
export default NavBar;