# from django.db import models
# from item_app.models import Item

# # Create your models here.
# class Cart(models.Model):
#     client = models.OneToOneField(Client,on_delete=models.CASCADE,related_name="cart", null=True)

# class Cart_item(models.Model):
#     quantity = models.BigIntegerField(null=True, default=0)
#     item = models.OneToOneField(Item, on_delete=models.CASCADE, null=True)
#     cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name= "cart_items",null=True)
    
    
# # from cart_app.models import Cart,Cart_item
# # from cart_app.serializers import CartSerializer,Cart_itemSerializer
# # from item_app.models import Item
# # from user_app.models import Client
# # item = Item.objects.get(id=1)
# # client = Client('ericka@gmail.com')
# # cart_item = Cart_item( quantity =+ 1 , item = item ,cart = Cart(client))