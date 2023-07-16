from rest_framework import serializers
from .models import Product, Admin

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'nome', 'get_absolute_url', 'marca', 'modelo', 'ano', 'preco', 'imagem', 'get_image', 'date_added' )

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('id', 'username', 'password')