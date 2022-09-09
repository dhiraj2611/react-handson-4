import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Components/Home';
import Students from './Components/Students';
import Contact from './Components/Contact';
import NavigationBar from './Components/NavBar';
import AddStudents from './Components/AddStudent';
import Details from './Components/Details';

function App() {
  return (
    <Details>
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path ='Home' element={<Home/>}/>
        <Route path ='Students' element={<Students/>}/>
        <Route path ='Contact' element={<Contact/>}/>
        <Route path ='AddStudents'element={<AddStudents/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
    
    </Details>

  );
}

export default App;
