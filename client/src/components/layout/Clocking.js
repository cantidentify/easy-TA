import React from 'react'

const Clocking = () => {
  return (
    <section className="landing">
    <div className="light-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Clocking - In / Out</h1>
        <p className="lead">
        {new Date().toLocaleString() + ""}
        </p>
        <div className="buttons">
          <a href="register.html" className="btn btn-primary">Sign Up</a>
          <a href="login.html" className="btn btn-light">Login</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Clocking
