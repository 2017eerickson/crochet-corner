from django.urls import path
from .views import *

urlpatterns = [
    path("", AllItems.as_view()),
    path("<int:item_id>/", AnItem.as_view())
]