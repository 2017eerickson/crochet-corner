from django.urls import path
from.views import Cart_manager, Add_or_sub,Delete_item

# method/<str:method>/cart_item/<int:cart_item_id>/

# urlpatterns = [
#     path("",Cart_manager.as_view(), name="cart"),
#     path("<str:method>/cart_item/<int:cart_item_id>/",Add_or_sub.as_view(),name="cart_item_quantity"),
#     path("delete_item/<int:cart_item_id>/",Delete_item.as_view(),name="delete_item"),
# ]
