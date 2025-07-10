// src/types/types.ts
export interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  estado: string;
  codigoPostal: string | null;
  fechaRegistro: string | null;
}

export interface CreateClienteDTO {
  fecha_registro: string;
  codigo_postal: string;
  telefono: string;
  apellido: string;
  ciudad: string;
  estado: string;
  nombre: string;
  email: string;
  direccion?: string;
}

export interface UpdateClienteDTO extends Partial<CreateClienteDTO> {}