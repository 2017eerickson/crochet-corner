import stripe
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from item_app.models import Item
from item_app.serializers import ItemSerializer
from rest_framework import status as s
from django.shortcuts import redirect

stripe.api_key = settings.STRIPE_SECRET_KEY

class EmbeddedCheckout(APIView):
    def post(self, request ): #This endpoint will be passed a list of cart item ids and will return a client secret for the checkout session
        ListItemsIds = request.data.get('cart_items')
        ListItems = [ItemSerializer(Item.objects.get(id=item_id)).data for item_id in ListItemsIds]#list of dicts with id, name, price for each item in cart
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
                    }, ListItems)),
                mode='payment',
                invoice_creation={"enabled": True},
                ui_mode='embedded', 
                redirect_on_completion='never',
                return_url=f"{base_url}/api/v1/orderstatus?session_id={{CHECKOUT_SESSION_ID}}"            
                )
            
            
            return Response({'data': checkout_session}, status=s.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=400)

class OrderStatus(APIView):
    def get(self, request):
        session_id = request.GET.get('session_id')
        try:
            session = stripe.checkout.Session.retrieve(session_id)
            payment_status = session.payment_status
            return Response({'payment_status': payment_status}, status=s.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=400)