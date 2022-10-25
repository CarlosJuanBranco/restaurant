import { Routes, Route } from 'react-router-dom';
import AdministracaoRestaurante from './paginas/AdministracaoRestaurante/AdministracaoRestaurante';
import FormularioRestaurante from './paginas/AdministracaoRestaurante/Formulario';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/adminRestaurante" element={<AdministracaoRestaurante />} />
      <Route path="/adminRestaurante/novo" element={<FormularioRestaurante />} />
    </Routes>
  );
}

export default App;
