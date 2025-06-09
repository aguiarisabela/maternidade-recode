import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.jsx';
import './styles/style.css';
import './styles/style-acessibilidade.css';
import Desafios from './pages/Desafios.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Adicionar outras rotas quando você fornecer as páginas */}
        <Route path="/desafios" element={<Desafios/>} />
        <Route path="/comunidade" element={<div>Comunidade (em construção)</div>} />
        <Route path="/sobre" element={<div>Sobre (em construção)</div>} />
        <Route path="/contato" element={<div>Contato (em construção)</div>} />
      </Routes>
    </Router>
  );
}

export default App;