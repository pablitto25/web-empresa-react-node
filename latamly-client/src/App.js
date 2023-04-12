import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
          {/* <Route path='/' element={<ContentTest/>}></Route>
          <Route path='/admin/media' element={<CompShowImgs/>}></Route>
          <Route path='/admin/media/upload' element={<Subir/>}></Route> */}
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
