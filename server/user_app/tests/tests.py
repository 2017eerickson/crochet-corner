from django.test import Client, TestCase
from models import User 
from django.urls import reverse
from django.core.exceptions import ValidationError
import json
from answers import *

# Create your tests here.
class Test_user_app(TestCase):
    fixtures = [
        "Users.json"
    ]
    
    def setUp(self):
        self.client = Client()  
        
    def test__002__create_a_user(self):
        response = self.client.post(reverse('create_user'), data={
            "email": "test@testexample.com",
            "password": "testpassword"
        })
        response_body = json.loads(response.content)
        self.assertEquals(response.status, 201)
        
    def test__003__create_a_user_with_bad_data(self):
        response = self.client.post(reverse('create_user'), data={
            "email": "",
            "password": "testpassword"
        })
        response_body = json.loads(response.content)
        self.assertEquals(response.status, 400)
        
        
    def test__004__login_a_user(self):
        response = self.client.post(reverse('login_user'))
        response_body = json.loads(response.content)
        self.assertEquals(response.status, 200)
        
    def test__005__login_a_user_with_bad_data(self):
        response = self.client.post(reverse('login_user'), data={
            "email": "",
            "password": "testpassword"
        })
        response_body = json.loads(response.content)
        self.assertEquals(response.status, 404)
        
    def test__006__logout_a_user(self):
        response = self.client.post(reverse('logout_user'))
        response_body = json.loads(response.content)
        self.assertEquals(response.status, 200)
        