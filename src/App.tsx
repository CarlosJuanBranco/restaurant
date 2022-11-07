import { Routes, Route } from 'react-router-dom';
import AdministracaoPrato from './paginas/AdministracaoPratos/AdministracaoPratos';
import FormularioPratos from './paginas/AdministracaoPratos/FormularioPratos';
import AdministracaoRestaurante from './paginas/AdministracaoRestaurante/AdministracaoRestaurante';
import FormularioRestaurante from './paginas/AdministracaoRestaurante/FormularioRestaurante';
import RotaBaseAdmin from './paginas/AdministracaoRestaurante/RotaBaseAdmin';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

      <Route path={"/admin/"} element={<RotaBaseAdmin />}>

        <Route path="restaurantes" element={<AdministracaoRestaurante />} />
        <Route path="restaurantes/novo" element={<FormularioRestaurante />} />
        <Route path="restaurantes/:id" element={<FormularioRestaurante />} />

        <Route path="pratos" element={<AdministracaoPrato />} />
        <Route path="pratos/novo" element={<FormularioPratos />} />

      </Route>

    </Routes>
  );
}

export default App;
