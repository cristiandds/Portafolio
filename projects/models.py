"""
Módulo de modelos para la app Projects.

Clean Code: Usamos Docstrings para documentar el modelo.
Mantenemos las responsabilidades claras.
"""
from django.db import models

class Project(models.Model):
    """
    Representa un proyecto en el portafolio.
    """
    nombre = models.CharField(max_length=100, help_text="Nombre del proyecto")
    descripcion = models.TextField(help_text="Descripción detallada del proyecto")
    tecnologias = models.CharField(max_length=200, help_text="Ej: React, Django, PostgreSQL")
    url_demo = models.URLField(blank=True, null=True, help_text="URL de la demo en vivo")
    url_repo = models.URLField(blank=True, null=True, help_text="URL del repositorio (ej. GitHub)")
    fecha_creacion = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name = "Proyecto"
        verbose_name_plural = "Proyectos"
        ordering = ['-fecha_creacion'] # Ordena descendentemente (el más nuevo primero)

    def __str__(self) -> str:
        return str(self.nombre) 