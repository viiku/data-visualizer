from django.shortcuts import render

# Create your views here.
# api/views.py
from rest_framework import generics
from data_ingestion.models import UploadedFile
from visualization.models import Visualization
from .serializers import UploadedFileSerializer, VisualizationSerializer

# List and Create Uploaded Files
class UploadedFileListCreateView(generics.ListCreateAPIView):
    queryset = UploadedFile.objects.all()
    serializer_class = UploadedFileSerializer

# Retrieve, Update, and Delete Uploaded Files
class UploadedFileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UploadedFile.objects.all()
    serializer_class = UploadedFileSerializer

# List and Create Visualizations
class VisualizationListCreateView(generics.ListCreateAPIView):
    queryset = Visualization.objects.all()
    serializer_class = VisualizationSerializer

# Retrieve, Update, and Delete Visualizations
class VisualizationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Visualization.objects.all()
    serializer_class = VisualizationSerializer
