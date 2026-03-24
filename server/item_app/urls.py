from django.urls import path
from .views import *

urlpatterns = [
    path("", AllItems.as_view(), name="all_items"),
    path("<int:item_id>/", AnItem.as_view(), name="an_item")
]