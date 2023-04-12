import logo from './logo.svg';
import './App.css';
import CompShowImgs from './imgs/ShowImgs.js';
import Subir from './imgs/Subir.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContentTest from './componentes/ContentTest.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ContentTest/>}></Route>
          <Route path='/admin/media' element={<CompShowImgs/>}></Route>
          <Route path='/admin/media/upload' element={<Subir/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
