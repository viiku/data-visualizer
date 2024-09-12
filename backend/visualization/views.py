from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import io
import base64

class VisualizationView(APIView):
    def get(self, request, *args, **kwargs):
        # Example data for visualization
        data = {
            'Category': ['A', 'B', 'C', 'D'],
            'Values': [10, 20, 15, 25]
        }
        df = pd.DataFrame(data)

        # Create a simple bar plot
        plt.figure(figsize=(10, 6))
        sns.barplot(x='Category', y='Values', data=df)
        plt.title('Sample Bar Plot')

        # Save the plot to a BytesIO object
        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        plt.close()
        buf.seek(0)

        # Encode the image to base64 string
        image_base64 = base64.b64encode(buf.read()).decode('utf-8')

        return Response({"message": "Visualization generated successfully", "image": image_base64}, status=status.HTTP_200_OK)
