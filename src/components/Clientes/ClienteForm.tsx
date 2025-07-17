// src/components/ClienteForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCliente } from '../../api/clientesApi';
import { CreateClienteDTO } from '../../types/types';
import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';
import { Save, Cancel } from '@mui/icons-material';

const ClienteForm = () => {
  const navigate = useNavigate();
  const [cliente, setCliente] = useState<CreateClienteDTO>({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    ciudad: '',
    estado: '',
    codigo_postal: '',
    fecha_registro: new Date().toISOString().split('T')[0]
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCliente(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error cuando el usuario escribe
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
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
    if (!validateForm()) return;

    try {
      await createCliente(cliente);
      navigate('/clientes');
    } catch (error) {
      console.error('Error al crear cliente:', error);
      setErrors(prev => ({
        ...prev,
        general: 'Error al guardar el cliente. Por favor intente nuevamente.'
      }));
    }
  };

  const handleCancel = () => {
    navigate('/clientes');
  };

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
          Nuevo Cliente
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
              Guardar Cliente
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default ClienteForm;