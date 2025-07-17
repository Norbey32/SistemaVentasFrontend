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

// Nuevas interfaces para Productos
export interface Categoria {
  categoria_id: number;
}

export interface Proveedor {
  proveedor_id: number;
}

export interface Producto {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  precioUnitario: number;
  stockActual: number | null;
  stockMinimo: number | null;
  estado: string;
  categoria?: Categoria;
  proveedor?: Proveedor;
}

export interface CreateProductoDTO {
  codigo: string;
  nombre: string;
  descripcion: string;
  precioUnitario: number;
  stockActual: number;
  stockMinimo: number;
  categoria: {
    categoria_id: number;
  };
  proveedor: {
    proveedor_id: number;
  };
  estado: string;
}

export interface UpdateProductoDTO {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  precioUnitario: number;
  stockActual: number;
  stockMinimo: number;
  estado: string;
}
// Nuevas interfaces para Ventas
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

export interface UpdateClienteDTO {
  id: number; // Asegúrate que esta propiedad exista
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  ciudad: string;
  estado: string;
  codigo_postal?: string;
  direccion?: string;
}

export interface Categoria {
  categoria_id: number;
}

export interface Proveedor {
  proveedor_id: number;
}

export interface Producto {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  precioUnitario: number;
  stockActual: number | null;
  stockMinimo: number | null;
  estado: string;
  categoria?: Categoria;
  proveedor?: Proveedor;
}

export interface CreateProductoDTO {
  codigo: string;
  nombre: string;
  descripcion: string;
  precioUnitario: number;
  stockActual: number;
  stockMinimo: number;
  categoria: {
    categoria_id: number;
  };
  proveedor: {
    proveedor_id: number;
  };
  estado: string;
}

export interface UpdateProductoDTO {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  precioUnitario: number;
  stockActual: number;
  stockMinimo: number;
  estado: string;
}

export interface Empleado {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  fechaContratacion: string | null;
  estado: string;
}

export interface DetalleVenta {
  detalle_id?: number;
  producto: {
    id: number;
    codigo?: string;
    nombre?: string;
    descripcion?: string;
    precioUnitario?: number;
    stockActual?: number | null;
    stockMinimo?: number | null;
    estado?: string;
  } | null;
  cantidad: number;
  precioUnitario: number;
  descuento: number;
  subtotal: number;
}

export interface Venta {
  id: number;
  cliente: {
    id: number;
    nombre?: string;
    apellido?: string;
    email?: string;
    telefono?: string;
    direccion?: string;
    ciudad?: string;
    estado?: string;
    codigoPostal?: string | null;
    fechaRegistro?: string | null;
  };
  empleado: {
    id: number;
    nombre?: string;
    apellido?: string;
    email?: string;
    telefono?: string;
    fechaContratacion?: string | null;
    estado?: string;
  };
  fechaVenta: string;
  subtotal: number;
  impuesto: number;
  descuento: number;
  total: number;
  metodoPago: 'EFECTIVO' | 'TARJETA_CREDITO' | 'TARJETA_DEBITO';
  estado: string;
  detalles: DetalleVenta[];
  venta_id?: number;
}

export interface CreateVentaDTO {
  cliente: {
    id: number;
  };
  empleado: {
    id: number;
  };
  impuesto: number;
  descuento: number;
  metodoPago: 'EFECTIVO' | 'TARJETA_CREDITO' | 'TARJETA_DEBITO';
  detalles: Array<{
    producto: {
      id: number;
    };
    cantidad: number;
    precioUnitario: number;
    descuento: number;
  }>;
}

export interface UpdateVentaDTO extends Partial<CreateVentaDTO> {
  id: number;
}

// Add these interfaces to your existing types.ts file

export interface InventarioMovimiento {
  id: number;
  producto: Producto | null;
  tipo: 'ENTRADA' | 'SALIDA';
  cantidad: number;
  fechaMovimiento: string;
  nota: string;
  empleado: Empleado | null;
  venta: Venta | null;
}

export interface CreateInventarioMovimientoDTO {
  producto: {
    id: number;
  } | null;
  tipo: 'ENTRADA' | 'SALIDA';
  cantidad: number;
  fechaMovimiento: string;
  nota: string;
  empleado: {
    id: number;
  } | null;
  venta: {
    id: number;
  } | null;
}

export interface UpdateInventarioMovimientoDTO extends Partial<CreateInventarioMovimientoDTO> {
  id: number;
}