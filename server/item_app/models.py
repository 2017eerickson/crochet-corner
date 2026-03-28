from django.db import models
from .validators import validate_size

# Create your models here.

class Item(models.Model):
    name = models.CharField(
        max_length=50,
        blank=False,
        null =False
        )
    desc= models.CharField(
        max_length=500,
        blank=False,
        null =False
        )
    color = models.CharField(
        max_length=50,
        blank=True,
        null =True
        )
    size = models.CharField(
        max_length=50,
        default= 'M',
        validators= [
            validate_size
            ]
        )
    photo = models.ImageField(upload_to='images/')
    # (
        # max_length=100,
        # blank=False,
        # null =False,
        # default = 'https://www.pngall.com/wp-content/uploads/5/Clothing-Hanger-PNG-High-Quality-Image.png'
        # )
    price = models.DecimalField(
        max_digits=5, 
        decimal_places=2,
        null=False,
        blank = False
        )
    sold = models.BooleanField(
        default=False
        )
    category = models.CharField(
        max_length=50,
        blank=False,
        null =False,
        default='Misc'
        )


  
