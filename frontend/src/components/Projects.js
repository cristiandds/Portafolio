import React from "react";
import { useProjects } from "../hooks/useProjects";

function Projects() {
    const { projects, loading, error } = useProjects();

    return (
        <section id="projects" className="section-container">
            <h2 className="section-title">Proyectos Destacados</h2>
            
            {loading && <p className="status-message">Conectando con la API...</p>}
            {error && <p className="status-message" style={{color: '#ef4444'}}>Ocurrió un error: {error}</p>}
            {!loading && !error && projects.length === 0 && (
                <p className="status-message">Aún no hay proyectos disponibles en el portafolio.</p>
            )}

            {!loading && !error && (
                <div className="projects-grid">
                    {projects.map(p => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            )}
        </section>
    );
}

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <h3 className="project-title">{project.nombre}</h3>
            
            <div className="project-tech">
                {project.tecnologias}
            </div>
            
            <p className="project-description">
                {project.descripcion}
            </p>
            
            <div className="btn-container">
                {project.url_demo && (
                    <a href={project.url_demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                        Ver Demo
                    </a>
                )}
                {project.url_repo && (
                    <a href={project.url_repo} target="_blank" rel="noreferrer" className="btn btn-secondary">
                        Código Fuente
                    </a>
                )}
            </div>
        </div>
    );
}

export default Projects;