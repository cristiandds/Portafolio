/**
 * Servicio centralizado para llamadas a la API.
 * 
 * Principio SOLID: Single Responsibility Principle (SRP).
 * Problema: La URL y la forma de hacer la petición estaban hardcodeadas en el componente.
 * Solución: Centralizamos la lógica de red en un servicio. Si la API cambia (ej. nuevo dominio),
 * solo modificamos este archivo y no todos los componentes.
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api";

export const fetchProjects = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/projects/`);
        if (!response.ok) {
            throw new Error("Error al obtener los proyectos del servidor");
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch API Error:", error);
        throw error;
    }
};
