from django.urls import path
from .views import (
    UploadedFileListCreateView,
    UploadedFileDetailView,
    VisualizationListCreateView,
    VisualizationDetailView,
)

urlpatterns = [
    # Endpoints for Uploaded Files
    path('files/', UploadedFileListCreateView.as_view(), name='file-list-create'),
    path('files/<int:pk>/', UploadedFileDetailView.as_view(), name='file-detail'),

    # Endpoints for Visualizations
    path('visualizations/', VisualizationListCreateView.as_view(), name='visualization-list-create'),
    path('visualizations/<int:pk>/', VisualizationDetailView.as_view(), name='visualization-detail'),
]
