from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import DashboardStat
from rest_framework.views import APIView
from django.contrib.auth.decorators import login_required
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class DashboardStatsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Example logic to gather stats; adjust based on your needs
        stats = DashboardStat.objects.filter(user=request.user)
        data = [{"key": stat.key, "value": stat.value} for stat in stats]
        return Response({"stats": data})
