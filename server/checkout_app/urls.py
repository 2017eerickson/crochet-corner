from django.urls import path
from .views import *

urlpatterns = [
    path("", EmbeddedCheckout.as_view()),
    
]