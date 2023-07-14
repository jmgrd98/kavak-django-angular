from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Product
from .serializers import ProductSerializer
from rest_framework.decorators import api_view
from rest_framework.renderers import JSONRenderer

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
@csrf_exempt
def product_list(request, id=0):

    if request.method == 'GET':
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        json_data = JSONRenderer().render(serializer.data).decode('utf-8')
        return JsonResponse(json_data, safe=False, content_type='application/json', status=200)
    
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ProductSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            json_data = JSONRenderer().render(serializer.data).decode('utf-8')
            return JsonResponse(json_data, status=201, content_type='application/json', safe=False)
        return JsonResponse(serializer.errors, status=400, safe=False)
        
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        product = Product.objects.get(id=data['id'])
        serializer = ProductSerializer(product, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, content_type='application/json', safe=False)
        return JsonResponse(serializer.errors, status=400, safe=False)
        
    elif request.method == 'DELETE':
        try:
            product = Product.objects.get(id=id)
            product.delete()
            return HttpResponse(status=204)
        except Product.DoesNotExist:
            return HttpResponse(status=404)