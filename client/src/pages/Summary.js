import React from 'react'
import Grid from '../components/Grid';
import CircleIcon from '@mui/icons-material/Circle';
import Chip from "@material-ui/core/Chip";


import Timer from '../components/Timer';
import { green, orange } from '@mui/material/colors';

const Summary = () => {
  const rows = [
    { id: 1, col1: '0', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Normal' },
    { id: 2, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Late' },
    { id: 3, col1: '0', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Normal' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
    { id: 4, col1: '1', col2: 'xxxx', col3:'5/30/2022, 5:21:47 PM', col4:'Clock-In', col5:'Early' },
  ];
  const columns = [
    { 
      field: 'col1', sortable: false,
    renderCell: (params) => {
      return <Chip style={{backgroundColor:'white'}} size='medium' {...renderIcon(params)}/>;
    }, headerName: 'Status', width: 150, headerAlign: 'center', },
    { field: 'col2', headerName: 'Id', width: 150, headerAlign: 'center', },
    { field: 'col3', headerName: 'Clock-Time', width: 200, headerAlign: 'center', },
    { field: 'col4', headerName: 'Type', width: 150, headerAlign: 'center', },
    { field: 'col5', headerName: 'Status', width: 150, headerAlign: 'center', }
  ];
  return (
    <section className='container'>
      <div className='other-menu'>
        <h1 className="large">Clocking History</h1>
        <br/>
        <div className='timer-center'>
          <h1 className='large'>{<Timer/>}</h1>
        </div>
        <div style={{ height: '24rem', width: '100%' }}>
          <Grid row={rows} column={columns}/>
        </div>
      </div>
    </section>


  )
}

function renderIcon(params){
  if(params.value == 1){
    return{
      icon : <CircleIcon style={{ fill: green[600] }}/>,

    }
  }
  if(params.value == 0){
    return{
      icon : <CircleIcon style={{ fill: orange[500] }}/>,

    }
  }
}

export default Summary