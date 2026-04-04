from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path("", AllCustomOrders.as_view(), name="all_custom_orders"),
    path("create/", CreateCustomOrder.as_view(), name="create_custom_order"),
    path("<int:order_id>/", ACustomOrder.as_view(), name="a_custom_order")
]