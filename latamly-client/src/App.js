import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';



function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/es' element={<Home/>}></Route>
        <Route path='/our-team' element={<OurTeam/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </div>
    
  );
}

export default App;
