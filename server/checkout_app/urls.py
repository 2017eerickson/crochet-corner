from django.urls import path
from .views import *

urlpatterns = [
    path("", EmbeddedCheckout.as_view()),
    # path('orderstatus/', OrderStatus.as_view(), name='order_status')
    
]