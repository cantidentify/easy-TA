import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
    <h1>
      <a href="index.html"><i class="fa-solid fa-business-time"></i> Easy TA</a>
    </h1>
    <ul>
      <li><a href="profiles.html">Clock-In / Out</a></li>
      <li><a href="register.html">Summary</a></li>
      <li><a href="login.html">Sign-In / Sign-Up</a></li>
    </ul>
  </nav>
  )
}

export default Navbar