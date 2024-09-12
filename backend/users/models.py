from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # Add additional fields if needed
    bio = models.TextField(null=True, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    
    def __str__(self):
        return self.username
    
    