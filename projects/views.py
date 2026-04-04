"""
Módulo de vistas para la API de Projects.

SOLID - Open/Closed Principle (OCP): Al heredar de las vistas genéricas (ListCreateAPIView), 
nuestra vista está abierta a la extensión pero cerrada a la modificación. 
Si necesitamos cambiar la paginación o permisos, podemos sobreescribir métodos
o atributos en lugar de reescribir toda la lógica HTTP.
"""
from rest_framework import generics
from .models import Project
from .serializers import ProjectSerializer

class ProjectListCreateAPIView(generics.ListCreateAPIView):
    """
    Vista (View) para listar y crear nuevos proyectos.
    
    Clean Code: Mantenemos el controlador "delgado" (Skinny Controllers).
    Evitamos manejar lógica de negocio compleja aquí; DRF se encarga del enrutamiento.
    """
    queryset = Project.objects.all() # Permite listar todos los proyectos
    serializer_class = ProjectSerializer # Permite listar y crear proyectos
    
    # Si quieres agregar autenticación, puedes hacerlo así:
    # permission_classes = [IsAuthenticated] # Solo usuarios autenticados pueden crear proyectos