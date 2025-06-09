import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.jsx';
import Desafios from './pages/Desafios.jsx';
import Comunidade from './pages/Comunidade.jsx';
import Sobre from './pages/Sobre.jsx';
import './styles/style.css';
import './styles/style-acessibilidade.css';
import './styles/style-comunidade.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desafios" element={<Desafios />} />
        <Route path="/comunidade" element={<Comunidade />} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/contato" element={<div>Contato (em construção)</div>} />
      </Routes>
    </Router>
  );
}

export default App;