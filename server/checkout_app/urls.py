from django.urls import path
from .views import *

urlpatterns = [
    path("", CheckoutItems.as_view()),
    
]