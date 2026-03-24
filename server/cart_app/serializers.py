from rest_framework.serializers import ModelSerializer, SerializerMethodField
from rest_framework import serializers
from .models import Cart,Cart_item
from item_app.serailizers import ItemSerializer, Item
class Cart_itemSerializer(serializers.ModelSerializer):
    item = serializers.SerializerMethodField()
    class Meta:
        model= Cart_item
        fields = ["id","item","quantity"]

    def get_item(self,obj):
        return ItemSerializer(obj.item).data
    
    
class CartSerializer(serializers.ModelSerializer):
    total_price = serializers.SerializerMethodField()
    cart_items = Cart_itemSerializer(many=True)
    class Meta:
        model= Cart
        fields = ['cart_items','total_price']
        
    def get_total_price(self,obj):
        total = 0
        for cart_item in obj.cart_items.all():
            total += cart_item.quantity * cart_item.item.price
        return total
        