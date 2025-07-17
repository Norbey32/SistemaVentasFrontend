// src/components/ClienteFormUpdate.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCliente, updateCliente } from '../../api/clientesApi';
import { Cliente, UpdateClienteDTO } from '../../types/types';
import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,  Select,
  CircularProgress
} from '@mui/material';
import { Save, Cancel } from '@mui/icons-material';

const ClienteFormUpdate = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState<UpdateClienteDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        if (!id) return;
        const data = await getCliente(parseInt(id));
        setCliente({
          id: data.id,
          nombre: data.nombre,
          apellido: data.apellido,
          email: data.email,
          telefono: data.telefono,
          ciudad: data.ciudad,
          estado: data.estado,
          codigo_postal: data.codigoPostal || '',
          direccion: data.direccion || ''
        });
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar cliente:', error);
        setErrors({ general: 'Error al cargar el cliente' });
        setLoading(false);
      }
    };

    fetchCliente();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (cliente) {
      setCliente({
        ...cliente,
        [name]: value
      });
    }
    // Limpiar error cuando el usuario escribe
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    if (!cliente) return false;
    const newErrors: Record<string, string> = {};
    if (!cliente.nombre) newErrors.nombre = 'Nombre es requerido';
    if (!cliente.apellido) newErrors.apellido = 'Apellido es requerido';
    if (!cliente.email) {
      newErrors.email = 'Email es requerido';
    } else if (!/^\S+@\S+\.\S+$/.test(cliente.email)) {
      newErrors.email = 'Email no válido';
    }
    if (!cliente.telefono) newErrors.telefono = 'Teléfono es requerido';
    if (!cliente.ciudad) newErrors.ciudad = 'Ciudad es requerida';
    if (!cliente.estado) newErrors.estado = 'Estado es requerido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cliente || !validateForm()) return;

    try {
      await updateCliente(cliente.id, cliente);
      navigate('/clientes');
    } catch (error) {
      console.error('Error al actualizar cliente:', error);
      setErrors(prev => ({
        ...prev,
        general: 'Error al actualizar el cliente. Por favor intente nuevamente.'
      }));
    }
  };

  const handleCancel = () => {
    navigate('/clientes');
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (!cliente) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography color="error">Cliente no encontrado</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      p: 3, 
      maxWidth: 800, 
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Editar Cliente
        </Typography>

        {errors.general && (
          <Typography color="error" sx={{ mb: 2 }}>
            {errors.general}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            mb: 2
          }}>
            <Box sx={{ flex: '1 1 200px' }}>
              <TextField
                fullWidth
                label="Nombre"
                name="nombre"
                value={cliente.nombre}
                onChange={handleChange}
                error={!!errors.nombre}
                helperText={errors.nombre}
                margin="normal"
                required
              />
            </Box>
            <Box sx={{ flex: '1 1 200px' }}>
              <TextField
                fullWidth
                label="Apellido"
                name="apellido"
                value={cliente.apellido}
                onChange={handleChange}
                error={!!errors.apellido}
                helperText={errors.apellido}
                margin="normal"
                required
              />
            </Box>
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={cliente.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              margin="normal"
              required
            />
          </Box>

          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            mb: 2
          }}>
            <Box sx={{ flex: '1 1 200px' }}>
              <TextField
                fullWidth
                label="Teléfono"
                name="telefono"
                value={cliente.telefono}
                onChange={handleChange}
                error={!!errors.telefono}
                helperText={errors.telefono}
                margin="normal"
                required
              />
            </Box>
            <Box sx={{ flex: '1 1 200px' }}>
              <TextField
                fullWidth
                label="Código Postal"
                name="codigo_postal"
                value={cliente.codigo_postal}
                onChange={handleChange}
                margin="normal"
              />
            </Box>
          </Box>

          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            mb: 2
          }}>
            <Box sx={{ flex: '1 1 200px' }}>
              <TextField
                fullWidth
                label="Ciudad"
                name="ciudad"
                value={cliente.ciudad}
                onChange={handleChange}
                error={!!errors.ciudad}
                helperText={errors.ciudad}
                margin="normal"
                required
              />
            </Box>
            <Box sx={{ flex: '1 1 200px' }}>
              <FormControl fullWidth margin="normal" required error={!!errors.estado}>
                <InputLabel>Estado</InputLabel>
                <Select
                  name="estado"
                  value={cliente.estado}
                  onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
                  label="Estado"
                >
                  <MenuItem value="Activo">Activo</MenuItem>
                  <MenuItem value="Inactivo">Inactivo</MenuItem>
                </Select>
                {errors.estado && (
                  <Typography variant="caption" color="error">
                    {errors.estado}
                  </Typography>
                )}
              </FormControl>
            </Box>
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Dirección"
              name="direccion"
              value={cliente.direccion || ''}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={2}
            />
          </Box>

          <Box sx={{ 
            mt: 3, 
            display: 'flex', 
            justifyContent: 'flex-end', 
            gap: 2 
          }}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<Cancel />}
              onClick={handleCancel}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<Save />}
            >
              Actualizar Cliente
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default ClienteFormUpdate;