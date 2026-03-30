from django.urls import path
from .views import *

urlpatterns = [
    path("", EmbeddedCheckout.as_view()),
    path('<session_id>/', SessionStatus.as_view())
    
]