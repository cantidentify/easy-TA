import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';
import TextField from "@material-ui/core/TextField";

// redux

const SignInUp = () => {

  const [loginForm,setLoginForm] = useState({id:"", password: ""})
  const [registerForm,setRegisterForm] = useState({id:"", name : "", password: "", password2: ""})

  const onSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <section className="container">
      <div className='sign-in-up'>
        <div className='login-section'>
        {false ? <div className="alert alert-danger">Invalid credentials</div> : null}

        <h1 className="large text-primary">Sign In</h1>
        <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
        <form onSubmit={e => onSubmit(e)}>
            <TextField 
                style ={{width: '18rem'}}
                value={loginForm.id} 
                onChange={e => setLoginForm({id : e.target.value, password : loginForm.password})}
                helperText="Please enter your ID." 
                id="filled-basic"  
                name='id' 
                label="ID" 
                variant="filled" 
            />

            <TextField 
              style ={{width: '18rem'}}
              value={loginForm.password} 
              onChange={e => setLoginForm({id : loginForm.id, password : e.target.value})}
              helperText="Please enter your password." 
              id="filled-basic"  
              name='password' 
              label="Password" 
              variant="filled" 
              type="password"
            />
          <br/>
          <br/>
          <Button type="submit" variant="contained" color="primary">Login</Button>

        </form>
        </div>

        <div className='register-section'>
          <h1 className="large text-primary">Sign Up</h1>
          <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
          <form action="create-profile.html">
            <FormControl>
              <TextField 
                style ={{width: '18rem'}}
                value={registerForm.id} 
                onChange={e => setRegisterForm({id:e.target.value, name : registerForm.name, password: registerForm.password, password2: registerForm.password2})}
                helperText="Please enter your ID" 
                id="filled-basic"  
                name='id' 
                label="Id" 
                variant="filled" 
              />

              <TextField 
                style ={{width: '18rem'}}
                value={registerForm.name}  
                onChange={e => setRegisterForm({id:registerForm.id, name : e.target.value, password: registerForm.password, password2: registerForm.password2})}
                helperText="Please enter your full name" 
                id="filled-basic"  
                name='name' 
                label="Full name" 
                variant="filled" 
              />

              <TextField 
                style ={{width: '18rem'}}
                value={registerForm.password}  
                onChange={e => setRegisterForm({id:registerForm.id, name : registerForm.name, password: e.target.value, password2: registerForm.password2})}
                helperText="Please enter your password" 
                id="filled-basic"  
                name='password' 
                label="Password" 
                variant="filled" 
                type="password"
              />

              <TextField 
                style ={{width: '18rem'}}
                value={registerForm.password2}  
                onChange={e => setRegisterForm({id:registerForm.id, name : registerForm.name, password: registerForm.password, password2: e.target.value})}
                helperText="Please enter your password" 
                id="filled-basic"  
                name='password2' 
                label="Confirm Password" 
                variant="filled" 
                type="password"
              />
            </FormControl>
            <br />
            <br />
            <Button type="submit" variant="contained" color="primary">Register</Button>
          </form>
        </div>
      </div>


  </section>
  )
}

export default SignInUp