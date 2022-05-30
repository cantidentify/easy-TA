import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
    <h1>
      <Link to="/"><i className="fa-solid fa-business-time"></i> Easy TA</Link>
    </h1>
    <ul>
      <li><Link to="/">Clock-In / Out</Link></li>
      <li><Link to="/summary">Summary</Link></li>
      <li><Link to="/Sign-In-Up">Sign-In / Sign-Up</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar