from django.db import models
from PIL import Image
from io import BytesIO

class Admin(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.TextField(max_length=100)
    password = models.TextField(max_length=100)

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.TextField(max_length=100)
    marca = models.TextField(max_length=100)
    modelo = models.TextField(max_length=100)
    ano = models.IntegerField()
    preco = models.FloatField()
    imagem = models.ImageField(upload_to='uploads/', blank=True, null=True)
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-preco']

    def __str__(self):
        return self.nome
    
    
