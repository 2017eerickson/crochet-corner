from rest_framework.serializers import ModelSerializer
from .models import CustomOrder

class CustomOrderSerializer(ModelSerializer):
    class Meta:
        model = CustomOrder
        fields = '__all__'