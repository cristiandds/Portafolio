/**
 * Custom Hook para gestionar el estado y la petición de proyectos.
 * 
 * Principio SOLID: Single Responsibility Principle (SRP).
 * Problema: El componente Projects.js se encargaba de manejar estados,
 * pedir datos a la API y renderizar la interfaz. Hacía demasiadas cosas.
 * Solución: Extraemos la lógica de estado y fetching aquí. El componente
 * ahora solo se encarga de mostrar la información visualmente.
 */
import { useState, useEffect } from "react";
import { fetchProjects } from "../services/api";

export const useProjects = () => {
    // Definimos estados más completos para una mejor UI (manejo de errores y loading)
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                // Delegamos la petición al servicio api.js
                const data = await fetchProjects();
                setProjects(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

    // Devolvemos el estado necesario para la vista
    return { projects, loading, error };
};
