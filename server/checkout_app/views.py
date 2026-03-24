import stripe
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from item_app.models import Item
from item_app.serializers import ItemSerializer
from rest_framework import status as s

stripe.api_key = settings.STRIPE_SECRET_KEY

class EmbeddedCheckout(APIView):
    def post(self, request ): #This endpoint will be passed a list of cart item ids and will return a client secret for the checkout session
        ListItemsIds = request.data.get('cart_items')
        ListItems = [ItemSerializer(Item.objects.get(id=item_id)).data for item_id in ListItemsIds]#list of dicts with id, name, price for each item in cart

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
            )
            if checkout_session.status == 'paid':
                # Handle post-payment logic here (e.g., update order status, send confirmation email, update db )
                 Item.objects.filter(id__in = ListItemsIds ).delete() # double underscore represents sql filter equivlant 'select * from itme_app_item where id in (1,5,3)'
                 print("Payment successful, items deleted from database.")
            elif checkout_session.status == 'unpaid':
                print("Payment unsucessfull, items still in database.")
            
            return Response({'clientSecret': checkout_session.client_secret})
        except Exception as e:
            return Response({'error': str(e)}, status=400)
