// Servicio para integración con Enviatodo.com
import clienteAxios from '../config/axios';

const ENVIATODO_API_BASE = 'https://api.enviatodo.com/v1';

// Configuración de headers para Enviatodo.com
const getEnviatodoHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ENVIATODO_API_KEY}`,
  'X-API-KEY': process.env.NEXT_PUBLIC_ENVIATODO_API_KEY,
});

// Cotizar envío
export const cotizarEnvio = async (datosEnvio) => {
  try {
    const { origen, destino, paquete, peso, dimensiones } = datosEnvio;
    
    const requestData = {
      origin: {
        postal_code: origen.codigoPostal,
        address: origen.direccion,
        city: origen.ciudad,
        state: origen.estado,
        country: "MX"
      },
      destination: {
        postal_code: destino.codigoPostal,
        address: destino.direccion,
        city: destino.ciudad,
        state: destino.estado,
        country: "MX"
      },
      packages: [{
        weight: peso,
        height: dimensiones.alto,
        width: dimensiones.ancho,
        length: dimensiones.largo,
        content: "Paquete e-commerce",
        type: "box"
      }],
      shipment_type: "standard"
    };

    const response = await fetch(`${ENVIATODO_API_BASE}/quotes`, {
      method: 'POST',
      headers: getEnviatodoHeaders(),
      body: JSON.stringify(requestData)
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cotizar envío:', error);
    throw error;
  }
};

// Generar guía de envío
export const generarGuia = async (datosGuia) => {
  try {
    const response = await fetch(`${ENVIATODO_API_BASE}/shipments`, {
      method: 'POST',
      headers: getEnviatodoHeaders(),
      body: JSON.stringify(datosGuia)
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al generar guía:', error);
    throw error;
  }
};

// Rastrear envío
export const rastrearEnvio = async (trackingNumber) => {
  try {
    const response = await fetch(`${ENVIATODO_API_BASE}/tracking/${trackingNumber}`, {
      headers: getEnviatodoHeaders()
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al rastrear envío:', error);
    throw error;
  }
};

// Obtener paqueterías disponibles
export const obtenerPaqueterias = async () => {
  try {
    const response = await fetch(`${ENVIATODO_API_BASE}/carriers`, {
      headers: getEnviatodoHeaders()
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener paqueterías:', error);
    throw error;
  }
};
