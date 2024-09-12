from django.urls import path
from .views import VisualizationView

urlpatterns = [
    path('generate/', VisualizationView.as_view(), name='generate-visualization'),
]
