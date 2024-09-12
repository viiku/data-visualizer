# api/serializers.py
from rest_framework import serializers
from data_ingestion.models import UploadedFile
from visualization.models import Visualization

class UploadedFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedFile
        fields = ['id', 'file', 'uploaded_at']

class VisualizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visualization
        fields = ['id', 'title', 'created_at']
