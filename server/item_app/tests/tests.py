import json
from django.test import TestCase, Client
from django.core.exceptions import ValidationError
from django.urls import reverse
from item_app.models import Item
from answers import *

# Create your tests here.
class Test_endpoints(TestCase):
    fixtures = [
        "items.json"
    ]
    
    def setUp(self):
        self.client = Client()  
        
    def test__001__get_all_items(self):
        response = self.client.get(reverse('all_items'))
        response_body = json.loads(response.content)
        self.assertEqual(response_body,items)
        
    def test__002__get_an_item(self):
        response = self.client.get(reverse('an_item', kwargs={"item_id": 3}))
        response_body = json.loads(response.content)
        self.assertEqual(response_body,item)
    
    def test__003__create_item(self):
        response = self.client.post(reverse('all_items'), data={'name': "hat", 'desc': "green cat hat with chin straps", 'price': "30.00"})
        response_body = json.loads(response.content)
        self.assertEqual(response_body,create_item)
        
    def test__004__edit_an_item(self):
        response = self.client.put(reverse('an_item', kwargs={"item_id": 10}), data={'name': "purple hat"})
        response_body = json.loads(response.content)
        self.assertEqual(response_body,edited_item)
        
    def test__005__delete_an_item(self):
        response = self.client.delete(reverse('an_item', kwargs={"item_id": 10}))
        response_body = json.loads(response.content)
        self.assertEqual(response.status , 200)

    