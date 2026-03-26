from django.contrib import admin
from .models import AppUser
from item_app.models import Item
# Register your models here.
admin.site.register([AppUser,Item])
