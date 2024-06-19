import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Nav from "./componentes/Nav";
import Aside from "./componentes/Aside";
import Footer from "./componentes/Footer";

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Comentarios from './paginas/Comentarios';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className='container'>
        <div className='row mt-3 mb-3'>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/sobre" element={<Sobre/>} />
            <Route exact path="/comentarios" element={<Comentarios/>} />
          </Routes>          
          <Aside />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
