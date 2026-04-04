from django.shortcuts import render
from rest_framework.views import APIView
from .models import CustomOrder
from .serailzers import CustomOrderSerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class AllCustomOrders(APIView):
    def get(self, request):
        orders = CustomOrder.objects.all()
        ser_order = CustomOrderSerializer(orders, many=True)
        if ser_order.data:
            return Response(ser_order.data, status=status.HTTP_200_OK)
        else:
            return Response({"message": "No custom orders found"}, status=status.HTTP_404_NOT_FOUND)
        
class CreateCustomOrder(APIView):
    def post(self, request):
        ser_order = CustomOrderSerializer(data=request.data)
        if ser_order.is_valid():
            ser_order.save()
            return Response(ser_order.data, status=status.HTTP_201_CREATED)
        else:
            return Response(ser_order.errors, status=status.HTTP_400_BAD_REQUEST)

class ACustomOrder(APIView):
    def get(self, request, order_id):
        try:
            order = CustomOrder.objects.get(id=order_id)
            ser_order = CustomOrderSerializer(order)
            return Response(ser_order.data, status=status.HTTP_200_OK)
        except CustomOrder.DoesNotExist:
            return Response({"message": "Custom order not found"}, status=status.HTTP_404_NOT_FOUND)