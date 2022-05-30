import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import FormControl from '@mui/material/FormControl';

import Timer from '../components/Timer';
const Clocking = () => {


  return (
    <section className="landing">
    <div className="light-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Clocking - In / Out</h1>
        <p className="lead">
        {<Timer/>}
        </p>
        <form>
          <FormControl>
              <TextField helperText="Please enter your ID" id="filled-basic"  name='id' label="ID" variant="filled" />
              <br/>
              <Button type="submit" variant="contained" color="primary">Clocking</Button>
          </FormControl>
        </form>

      </div>
    </div>
  </section>
  )
}

export default Clocking
