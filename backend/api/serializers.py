from rest_framework import serializers
from .models import Product, Admin

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'nome', 'marca', 'modelo', 'ano', 'preco', 'imagem' )

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('id', 'username', 'password')