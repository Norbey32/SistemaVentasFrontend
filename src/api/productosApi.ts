// src/api/productosApi.ts
import axios from 'axios';
import { Producto, CreateProductoDTO, UpdateProductoDTO } from '../types/types';

const API_URL = 'http://localhost:8080/api/productos';

export const getProductos = async (): Promise<Producto[]> => {
  try {
    const response = await axios.get<Producto[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching productos:', error);
    throw error;
  }
};

export const createProducto = async (productoData: CreateProductoDTO): Promise<Producto> => {
  try {
    const response = await axios.post<Producto>(API_URL, productoData);
    return response.data;
  } catch (error) {
    console.error('Error creating producto:', error);
    throw error;
  }
};

export const updateProducto = async (id: number, productoData: UpdateProductoDTO): Promise<Producto> => {
  try {
    const response = await axios.put<Producto>(`${API_URL}/${id}`, productoData);
    return response.data;
  } catch (error) {
    console.error(`Error updating producto ${id}:`, error);
    throw error;
  }
};

export const deleteProducto = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting producto ${id}:`, error);
    throw error;
  }
};

// Exportación vacía para TypeScript
export {};