import React, {useState, Suspense, lazy, useContext } from 'react'
import './App.css';
import {UserContext} from './Context/UseContext';
import {
  Routes,
  Route,
  Navigate,

} from "react-router-dom";

import DataGrid from './components/DataGrid/DataGrid';
import Home from './components/Recruiter/Recruiter';
import Navbar from './components/Header/Navbar';
import Login from './components/Login/Login';
import Register from './components/SignUp/Register'
import Land from './components/Land';
import Error from './components/Error/Error';
import Vendor from './components/Vendor/Vendor';
import Exitvendor from './components/Vendor/ExistingVendor/Exitvendor';
import Newvendor from './components/Vendor/NewVendor/Newvendor';
 import Resources from './components/Resources/Resources';
 import ExistingResources from './components/Resources/ExistingResources';
import NewResource from './components/Resources/NewResource';

function App() {

  const {logindata } = useContext(UserContext)

const [local, setLocal] = useState(    
  localStorage.getItem('usersdatatoken')); 
  
  let jwtToken =  localStorage.getItem('usersdatatoken');
 

  return (

<div className="App">
    <>
   
      <Navbar setLocal={setLocal}/>
   
     
      <Routes>
        <Route path="/" element={jwtToken? <Navigate to ='/dash' /> : <Login  setLocal={setLocal}/> } />
        <Route path="/login" element={jwtToken? <Navigate to ='/dash' /> : <Login setLocal={setLocal}/>} />
        <Route path="/dash/register" element={jwtToken? <Register /> : <Navigate to ='/login' />} />
        <Route path="/dash" element={jwtToken? <Land /> : <Navigate to ='/login' />} />
        <Route exact path="/dash/recuriter/:jobpostgrp" element={jwtToken? <DataGrid /> : <Navigate to ='/login' />} />
        <Route exact path="/dash/vendor" element={jwtToken? <Vendor/> : <Navigate to ='/login' />} />
        <Route exact path="/dash/recuriter" element={jwtToken? <Home /> :  <Navigate to ='/login' />} />
        <Route exact path="/dash/vendor/existingvendor" element={jwtToken? <Exitvendor /> :  <Navigate to ='/login' />}/>
        <Route exact path="/dash/vendor/newvendor" element={jwtToken? <Newvendor /> :  <Navigate to ='/login' />} />
        <Route exact path="/dash/resources" element={jwtToken? <Resources /> :  <Navigate to ='/login' />} />
        <Route exact path="/dash/resources/allresources" element={jwtToken? <ExistingResources /> :  <Navigate to ='/login' />}/>
        <Route exact path="/dash/resources/addresource" element={jwtToken? <NewResource /> :  <Navigate to ='/login' />} />
        <Route path="*" element={<Error />} />
      </Routes>
    
    </>
</div>
  );
}

export default App;
