// src/services/inventarioApi.ts
import axios from 'axios';
import { InventarioMovimiento, CreateInventarioMovimientoDTO, UpdateInventarioMovimientoDTO } from '../types/types';

const API_URL = 'http://localhost:8080/api/inventario-movimientos';

export const getInventarioMovimientos = async (): Promise<InventarioMovimiento[]> => {
  try {
    const response = await axios.get<InventarioMovimiento[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching inventario movimientos:', error);
    throw error;
  }
};

export const createInventarioMovimiento = async (data: CreateInventarioMovimientoDTO): Promise<InventarioMovimiento> => {
  try {
    const response = await axios.post<InventarioMovimiento>(API_URL, data);
    return response.data;
  } catch (error) {
    console.error('Error creating inventario movimiento:', error);
    throw error;
  }
};

export const updateInventarioMovimiento = async (id: number, data: UpdateInventarioMovimientoDTO): Promise<InventarioMovimiento> => {
  try {
    const response = await axios.put<InventarioMovimiento>(`${API_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating inventario movimiento:', error);
    throw error;
  }
};

export const deleteInventarioMovimiento = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting inventario movimiento:', error);
    throw error;
  }
};