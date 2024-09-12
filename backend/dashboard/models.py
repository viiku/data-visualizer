from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.

User = get_user_model()

class DashboardStat(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    key = models.CharField(max_length=100)
    value = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.key}: {self.value}"
