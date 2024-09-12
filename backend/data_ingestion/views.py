from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework import status
from .models import UploadedFile
from .serializers import UploadedFileSerializer
import pandas as pd

class FileUploadView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, *args, **kwargs):
        file_serializer = UploadedFileSerializer(data=request.data)
        if file_serializer.is_valid():
            file_serializer.save()

            # Process the uploaded file
            file_obj = file_serializer.instance.file
            data = pd.read_excel(file_obj)  # Adjust this if CSV or another format is used

            # Example processing: save the data to another model or prepare for visualization
            # Here we assume the file contains columns 'name', 'value', etc.
            processed_data = data.to_dict(orient='records')

            # For simplicity, return the processed data (this would typically be saved to a database)
            return Response({"message": "File uploaded and processed successfully", "data": processed_data}, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
