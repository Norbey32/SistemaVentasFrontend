// src/api/ventasApi.ts
import axios from 'axios';
import { Venta, CreateVentaDTO, UpdateVentaDTO } from '../types/types';

const API_URL = 'http://localhost:8080/api/ventas';

export const getVentas = async (): Promise<Venta[]> => {
  try {
    const response = await axios.get<Venta[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching ventas:', error);
    throw error;
  }
};

export const getVentaById = async (id: number): Promise<Venta> => {
  try {
    const response = await axios.get<Venta>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching venta ${id}:`, error);
    throw error;
  }
};

export const createVenta = async (ventaData: CreateVentaDTO): Promise<Venta> => {
  try {
    const response = await axios.post<Venta>(API_URL, ventaData);
    return response.data;
  } catch (error) {
    console.error('Error creating venta:', error);
    throw error;
  }
};

export const updateVenta = async (id: number, ventaData: UpdateVentaDTO): Promise<Venta> => {
  try {
    const response = await axios.put<Venta>(`${API_URL}/${id}`, ventaData);
    return response.data;
  } catch (error) {
    console.error(`Error updating venta ${id}:`, error);
    throw error;
  }
};

export const deleteVenta = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting venta ${id}:`, error);
    throw error;
  }
};

// Exportación vacía para TypeScript
export {};