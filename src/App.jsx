import React, {useState, Suspense, lazy, useContext } from 'react'
import './App.css';
import {UserContext} from './Context/UseContext';
import {
  Routes,
  Route,
  Navigate,

} from "react-router-dom";

const DataGrid = lazy(()=> import('./components/DataGrid/DataGrid'));
const Home = lazy(()=> import('./components/Recruiter/Recruiter'));
const Navbar = lazy(()=> import('./components/Header/Navbar'));
const Login = lazy(()=> import('./components/Login/Login'));
const Register = lazy(()=> import('./components/SignUp/Register'));
const Land = lazy(()=> import('./components/Land'));
const Error = lazy(()=> import('./components/Error/Error'));
const Vendor = lazy(()=> import('./components/Vendor/Vendor'));
const Exitvendor = lazy(()=> import('./components/Vendor/ExistingVendor/Exitvendor'));
const Newvendor = lazy(()=> import('./components/Vendor/NewVendor/Newvendor'));
const Resource = lazy(()=> import('./components/Resources/Resources'));
const ExistingResources = lazy(()=> import('./components/Resources/ExistingResources'));
const NewResource = lazy(()=> import('./components/Resources/NewResource'));

function App() {

  const {logindata } = useContext(UserContext)

  const [local, setLocal] = useState(
    localStorage.getItem('usersdatatoken')
  );
  return (


<div className="App">
    <>
    <Suspense>
      <Navbar setLocal={setLocal}/>
    </Suspense>
      <Suspense>
      <Routes>
        <Route path="/" element={<Suspense>{local? <Navigate to ='/dash' /> : <Login  setLocal={setLocal}/> }</Suspense>} />
        <Route path="/login" element={<Suspense>{local? <Navigate to ='/dash' /> : <Login setLocal={setLocal}/>}</Suspense>} />
        <Route path="/dash/register" element={<Suspense>{local? <Register /> : <Navigate to ='/login' />}</Suspense>} />
        <Route path="/dash" element={<Suspense>{local? <Land /> : <Navigate to ='/login' />}</Suspense>} />
        <Route exact path="/dash/recuriter/:jobpostgrp" element={<Suspense>{local? <DataGrid /> : <Navigate to ='/login' />}</Suspense>} />
        <Route exact path="/dash/vendor" element={<Suspense>{local? <Vendor/> : <Navigate to ='/login' />}</Suspense>} />
        <Route exact path="/dash/recuriter" element={<Suspense>{local? <Home /> :  <Navigate to ='/login' />}</Suspense>} />
        <Route exact path="/dash/vendor/existingvendor" element={<Suspense>{local? <Exitvendor /> :  <Navigate to ='/login' />}</Suspense>}/>
        <Route exact path="/dash/vendor/newvendor" element={<Suspense>{local? <Newvendor /> :  <Navigate to ='/login' />}</Suspense>} />
        <Route exact path="/dash/resources" element={<Suspense>{local? <Resource /> :  <Navigate to ='/login' />}</Suspense>} />
        <Route exact path="/dash/resources/allresources" element={<Suspense>{local? <ExistingResources /> :  <Navigate to ='/login' />}</Suspense>}/>
        <Route exact path="/dash/resources/addresource" element={<Suspense>{local? <NewResource /> :  <Navigate to ='/login' />}</Suspense>} />
        <Route path="*" element={<Suspense><Error /></Suspense>} />
      </Routes>
      </Suspense>
    </>
</div>
  );
}

export default App;
