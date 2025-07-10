import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
{/* import VentasPage from './pages/VentasPage';
import ProductosPage from './pages/ProductosPage';
import ClientesPage from './pages/ClientesPage';
import InventarioPage from './pages/InventarioPage';*/}
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          {/* <Route path="/ventas" element={<VentasPage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/inventario" element={<InventarioPage />} />*/}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;