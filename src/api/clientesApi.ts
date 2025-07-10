// src/api/clientesApi.ts
import axios from 'axios';
import { Cliente, CreateClienteDTO, UpdateClienteDTO } from '../types/types';

const API_URL = 'http://localhost:8080/api/clientes';

export const getClientes = async (): Promise<Cliente[]> => {
  try {
    const response = await axios.get<Cliente[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching clientes:', error);
    throw error;
  }
};

export const createCliente = async (clienteData: CreateClienteDTO): Promise<Cliente> => {
  try {
    const response = await axios.post<Cliente>(API_URL, clienteData);
    return response.data;
  } catch (error) {
    console.error('Error creating cliente:', error);
    throw error;
  }
};

export const updateCliente = async (id: number, clienteData: UpdateClienteDTO): Promise<Cliente> => {
  try {
    const response = await axios.put<Cliente>(`${API_URL}/${id}`, clienteData);
    return response.data;
  } catch (error) {
    console.error(`Error updating cliente ${id}:`, error);
    throw error;
  }
};

export const deleteCliente = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting cliente ${id}:`, error);
    throw error;
  }
};

// Exportación vacía para resolver el error de isolatedModules
export {};