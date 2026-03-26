from rest_framework.response import Response
from .serializers import ItemSerializer
from rest_framework import status as s
from rest_framework.views import APIView
from .models import Item

# Create your views here.
class AllItems(APIView):
    def get(self,request):
        items= Item.objects.all()
        ser_items = ItemSerializer(items, many=True)
        if ser_items.data == []:
            return Response("No items found", status = s.HTTP_404_NOT_FOUND)
        return Response(ser_items.data, status = s.HTTP_200_OK)

    def post(self, request):
        data = request.data.copy()
        data['user'] = request.user.id
        ser_item = ItemSerializer(data=data)
        if ser_item.is_valid():
            ser_item.save()
            return Response(ser_item.data, status=s.HTTP_201_CREATED)
        else:
            return Response(ser_item.errors, status=s.HTTP_400_BAD_REQUEST)

class AnItem(APIView):
    def get(self, request, item_id):
        return Response(ItemSerializer(Item.objects.get(id=item_id)).data)
    
    def put(self, request, item_id):
        data = request.data.copy()
        ser_item = ItemSerializer(Item.objects.get(id=item_id), data=data, partial=True)
        if ser_item.is_valid():
            ser_item.save()
            return Response(ser_item.data)
        else:
            return Response(ser_item.errors, status=s.HTTP_400_BAD_REQUEST)

    def delete(self, request, item_id):
        item = Item.objects.get(id=item_id)
        return_string = f"{item.name} has been deleted"
        item.delete()
        return Response(return_string)    
    
class Media(APIView):
    pass