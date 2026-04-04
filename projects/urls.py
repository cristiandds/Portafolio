from django.urls import path
from .views import ProjectListCreateAPIView

urlpatterns = [
    path("projects/", ProjectListCreateAPIView.as_view(), name="projects-list"),
]