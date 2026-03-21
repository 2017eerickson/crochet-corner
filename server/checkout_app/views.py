from rest_framework.views import APIView
from rest_framework.response import Response
# import requests # <== import requests so we can utilize it within our CBV to make API calls
# from requests_oauthlib import OAuth1
import stripe
from dotenv import dotenv_values
env = dotenv_values(".env")


# Create your views here.
class CheckoutItems(APIView):
    # stripe.api_key = env.getenv('STRIPE_SECRET_KEY')
    YOUR_DOMAIN = 'http://localhost:8000'

    def post(self, request):
        try:
            checkout_session = stripe.checkout.Session.create(
                line_items=[
                    {
                        'price': '10.price_1TDR5HD53YbrJkK5DjPVgjmP', # <== this is the price ID for the item we want to purchase. We can find this in our Stripe dashboard
                        'quantity': 1,
                    },
                ],
                mode='payment',
                api_key=env.get('STRIPE_SECRET_KEY'),
                success_url="https://yourfrontendurl.com/success/",  # redirect after success
                cancel_url="https://yourfrontendurl.com/cancel/",    # redirect if cancelled
                allow_promotion_codes=True,   # optional: allow discounts
                )
            # return Response({'id': checkout_session.id})
            return Response({"checkout_url": checkout_session.url})

        except Exception as e:
            return Response(str(e), status=400)
    # take in obj of list items 
    # find items in items.all
    # input each at line item in checkoutobj 
    