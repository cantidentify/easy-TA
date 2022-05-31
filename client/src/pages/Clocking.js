import React, { useState } from 'react'
import api from '../utils/api';
import { Button } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import FormControl from '@mui/material/FormControl';

import Timer from '../components/Timer';
const Clocking = () => {

  const [id,setId] = useState("")
  const [errorAlert,setErrorAlert] = useState({show : false,msg : "", class:"alert alert-danger"})
  const [disableBtn, setDisableBtn] = useState(false)

  const checkClocking = async clockingData => {
    const params = {
      id : id,
      date : clockingData.date
    }
  
    try{
  
      const body = JSON.stringify(params)
      const res = await api.post('/clocking/userClocking',body)
  
      let status , type = ""
      if(res.data.length > 0){
        type = "check-out"
  
        if(clockingData.time < '18:00'){
          status = "early"
        }
        else{
          status = "normal"
        }
      }
      else{
        type = "check-in"
  
        if(clockingData.time > '9:00'){
          status = "late"
        }
        else{
          status = "normal"
        }
      }
  
      clockingData.status = status
      clockingData.type = type
      
      setErrorAlert({show : false, msg:""})
      return clockingData

    }catch(err){
      setErrorAlert({show : true, msg:"Server error please try again.",class:"alert alert-danger"})
    }
  }

  const onSubmit = async e => {
    e.preventDefault();
    if(!id){
      setErrorAlert({show : true, msg:"Please enter your ID.", class: "alert alert-danger"})
      return
    }

    const clockingData = {
      "id" : id,
      "date" : getDate(),
      "time" : getTime(),
      "type" : "",
      "status" : ""
    }

    var newClocking = await checkClocking(clockingData)
    try{
      const res = await api.post('/clocking/',newClocking)
      setDisableBtn(true)
      setErrorAlert({show : true, msg:"Clocking Success.", class:"alert alert-success"})
    } catch (err){
      if(err.response.data.msg == "Already clocked-out. Thank you for today work."){
        setDisableBtn(true)
      }
      setErrorAlert({show : true, msg:err.response.data.msg, class:"alert alert-success"})
    }

  }

  return (
    <section className="landing">
    <div className="light-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Clocking - In / Out</h1>
        <p className="lead">
        {<Timer/>}
        </p>
        <form onSubmit={e => onSubmit(e)}>
          <FormControl>
              <TextField 
                value={id} 
                onChange={(e) => {setErrorAlert({show : false, msg:""}); setId(e.target.value)}} 
                helperText="Please enter your ID." 
                id="filled-basic"  
                name='id' 
                label="ID" 
                variant="filled" 
              />
              { 
                errorAlert.show ? <div className={errorAlert.class}>{errorAlert.msg}</div> : null 
              }
              <br/>
              <Button disabled={disableBtn} type="submit" variant="contained" color="primary">Clocking</Button>
          </FormControl>
        </form>

      </div>
    </div>
  </section>
  )
}

function getDate(){
  let d = new Date();
  let month = (d.getMonth() + 1).toString();
  let day = d.getDate().toString();
  let year = d.getFullYear();
  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  return [year, month, day].join('-');
}

function getTime(){
  let now = new Date();
  let current = now.getHours() + ':' + now.getMinutes();
  return current
}



export default Clocking
