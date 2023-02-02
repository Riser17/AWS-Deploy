import React, { Suspense, lazy }from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
const UserContextProvider = lazy(()=> import('./Context/UseContext'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
    <UserContextProvider>
    <App />
    </UserContextProvider>
    </BrowserRouter>
);

