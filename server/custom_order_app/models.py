from django.db import models

# Create your models here.

class CustomOrder(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(null=False, blank=False)
    description = models.TextField(max_length=500, null=False, blank=False)
    photo = models.ImageField(upload_to='custom_orders/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Custom Order from {self.name} ({self.email})"
