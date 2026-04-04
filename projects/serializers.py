from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__" # Incluye todos los campos del modelo
        # Si quieres incluir solo algunos campos, puedes especificarlos así:
        # fields = ['nombre', 'descripcion', 'tecnologias', 'url_demo', 'url_repo', 'fecha_creacion']

        