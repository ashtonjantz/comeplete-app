import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Form from './components/Form'
import Edit from './components/Edit'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Form/>}/>
      <Route path = '/dashboard' element = {<Dashboard/>}/>
      <Route path = '/edit/:id' element = {<Edit/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
