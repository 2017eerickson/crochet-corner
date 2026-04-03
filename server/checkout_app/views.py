import stripe
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from item_app.models import Item
from item_app.serializers import ItemSerializer
from rest_framework import status as s
from django.shortcuts import redirect
from django.http import JsonResponse


stripe.api_key = settings.STRIPE_SECRET_KEY

class EmbeddedCheckout(APIView):
    def post(self, request ): #This endpoint will be passed a list of cart item ids and will return a client secret for the checkout session
        itemsIds = request.data.get('cart_items')
        items = Item.objects.filter(id__in=itemsIds)
        itemObj = [ItemSerializer(item).data for item in items]#list of dicts with id, name, price for each item in cart
        base_url = request.data.get('return_url_base')
        try:
            checkout_session = stripe.checkout.Session.create(
                billing_address_collection="required",
                shipping_address_collection={"allowed_countries": ["US", "CA"]},
                line_items=list(map(lambda item: {
                        'price_data': {
                            'currency': 'usd',
                            'product_data': {
                                'name': item['name'],
                            },
                            'unit_amount': int(float(item['price']) * 100), # Stripe expects amount in cents
                        },
                        'quantity': 1,
                    }, itemObj)),
                mode='payment',
                invoice_creation={"enabled": True},
                ui_mode='embedded_page', 
                return_url=f"http://localhost:80/orderstatus/{{CHECKOUT_SESSION_ID}}/"            
                )           
            # how to add this to return url 
            
            return Response({'clientSecret': checkout_session.client_secret},status=s.HTTP_200_OK )
        except Exception as e:
            return Response({'error': str(e)}, status=400)
class SessionStatus(APIView):    
    def get(self, request, session_id):
        try:
            session = stripe.checkout.Session.retrieve(session_id)
            payment_status = session.payment_status
            customer_email = session.customer_details.email
        
            return Response({'payment_status': payment_status, 'customer_email': customer_email}, status=s.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=400)
