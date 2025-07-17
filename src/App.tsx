// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import VentasPage from './pages/VentasPage';
import ProductosPage from './pages/ProductosPage';
import ClientesPage from './pages/ClientesPage';
import ClienteForm from './components/Clientes/ClienteForm';
import ClienteFormUpdate from './components/Clientes/ClienteFormUpdate';
import InventarioPage from './pages/InventarioPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/ventas" element={<VentasPage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/clientes/crear" element={<ClienteForm />} />
          <Route path="/clientes/editar/:id" element={<ClienteFormUpdate />} />
          <Route path="/inventario" element={<InventarioPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;