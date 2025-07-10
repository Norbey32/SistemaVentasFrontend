import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getVentas = async () => {
  try {
    const response = await axios.get(`${API_URL}/ventas`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ventas:', error);
    throw error;
  }
};

export const createVenta = async (ventaData: any) => {
  try {
    const response = await axios.post(`${API_URL}/ventas`, ventaData);
    return response.data;
  } catch (error) {
    console.error('Error creating venta:', error);
    throw error;
  }
};

export const updateVenta = async (id: string, ventaData: any) => {
  try {
    const response = await axios.put(`${API_URL}/ventas/${id}`, ventaData);
    return response.data;
  } catch (error) {
    console.error('Error updating venta:', error);
    throw error;
  }
};

export const deleteVenta = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/ventas/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting venta:', error);
    throw error;
  }
};
export const getVentaById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/ventas/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching venta by ID:', error);
    throw error;
  }
};
