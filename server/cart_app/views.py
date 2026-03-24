# from django.shortcuts import render
# from rest_framework.views import APIView
# from rest_framework.response import Response
# import rest_framework.status as s 
# from user_app.models import Client
# from cart_app.models import Cart,Cart_item
# from cart_app.serializers import CartSerializer,Cart_itemSerializer
# from item_app.models import Item
# from item_app.serailizers import ItemSerializer

# from rest_framework.permissions import IsAuthenticated
# from rest_framework.authentication import TokenAuthentication

# class Cart_manager(APIView):
    
#     def get(self,request):
#         # verify user 
#         permission_classes = (IsAuthenticated,)
#         authentication_classes = (TokenAuthentication,)     
        
#         cart = Cart.objects.get(client = request.user) #returns the cart instance for the client
#         ser_cart = CartSerializer(cart) #serializes the cart instance
#         cart_items = Cart_item.objects.filter(cart = cart)  #returns a list of cart items associated with the cart instance
#         ser_cart_items = Cart_itemSerializer(cart_items, many=True)
#         return Response(ser_cart.data, status = s.HTTP_200_OK)


    
# class Add_or_sub(APIView):
    
#     def put(self,request,method,cart_item_id):
#         # verify user 
#         permission_classes = (IsAuthenticated,)
#         authentication_classes = (TokenAuthentication,)
        
#         item = Item.objects.get(id=cart_item_id)            
#         cart = Cart.objects.get(client=request.user)       
#         cart_items = Cart_item.objects.get(item = item , cart = cart)
        
#         if method == 'add':
#             cart_items.quantity += 1
#             cart_items.save()
#             return Response(f'1 {cart_items.item.name} has been added to your cart',status= s.HTTP_201_CREATED)
#         elif method == 'sub':
#             cart_items.quantity -= 1
#             cart_items.save()

#             if cart_items.quantity == 0: 
#                 cart_items.item.delete()
#             # cart_items.save()
#             return Response(f'1 {cart_items.item.name} has been subtracted from your cart',status= s.HTTP_201_CREATED)
                    
#             # "client": "ee2017@gmail.com",
#     # "token": "4026e0463f6f686728707933169bd2edc8742532"
                
# class Delete_item(APIView):
    
#     def delete(self,request,cart_item_id):
#         # verify user 
#         permission_classes = (IsAuthenticated,)
#         authentication_classes = (TokenAuthentication,)
        
#         cart = Cart.objects.get(client=request.user)       
#         cart_items = Cart_item.objects.get(id = cart_item_id, cart = cart)
#         cart_items.delete()
#         return Response(f'{cart_items.item.name} has been deleted from your cart',status= s.HTTP_204_NO_CONTENT)        
       
