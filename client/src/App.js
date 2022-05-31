import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Clocking from './pages/Clocking';
import SignInUp from './pages/SignInUp';
import Summary from './pages/Summary';

// Redux
import { Provider } from 'react-redux';
import store from './store'

import './App.css';

const App = () => 
<Provider store={store}>
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Clocking/>}/>
      <Route path='summary' element={<Summary/>} />
      <Route path='Sign-In-Up' element={<SignInUp/>} />
    </Routes>
  </Router>
</Provider>


export default App;
