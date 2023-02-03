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
    localStorage.getItem('usersdatatoken')
  );
  return (


<div className="App">
    <>
   
      <Navbar setLocal={setLocal}/>
   
     
      <Routes>
        <Route path="/" element={local? <Navigate to ='/dash' /> : <Login  setLocal={setLocal}/> } />
        <Route path="/login" element={local? <Navigate to ='/dash' /> : <Login setLocal={setLocal}/>} />
        <Route path="/dash/register" element={local? <Register /> : <Navigate to ='/login' />} />
        <Route path="/dash" element={local? <Land /> : <Navigate to ='/login' />} />
        <Route exact path="/dash/recuriter/:jobpostgrp" element={local? <DataGrid /> : <Navigate to ='/login' />} />
        <Route exact path="/dash/vendor" element={local? <Vendor/> : <Navigate to ='/login' />} />
        <Route exact path="/dash/recuriter" element={local? <Home /> :  <Navigate to ='/login' />} />
        <Route exact path="/dash/vendor/existingvendor" element={local? <Exitvendor /> :  <Navigate to ='/login' />}/>
        <Route exact path="/dash/vendor/newvendor" element={local? <Newvendor /> :  <Navigate to ='/login' />} />
        <Route exact path="/dash/resources" element={local? <Resources /> :  <Navigate to ='/login' />} />
        <Route exact path="/dash/resources/allresources" element={local? <ExistingResources /> :  <Navigate to ='/login' />}/>
        <Route exact path="/dash/resources/addresource" element={local? <NewResource /> :  <Navigate to ='/login' />} />
        <Route path="*" element={<Error />} />
      </Routes>
    
    </>
</div>
  );
}

export default App;
