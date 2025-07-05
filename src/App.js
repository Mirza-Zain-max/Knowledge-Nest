import React from 'react';
import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Routes from './Pages/Routes'
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
      <Routes/>
      <ToastContainer/>
    </>
  );
}

export default App;
