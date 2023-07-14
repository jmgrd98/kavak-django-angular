from django.db import models
from PIL import Image

class Admin(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.TextField(max_length=100)
    password = models.TextField(max_length=100)

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField(max_length=100)
    price = models.FloatField()
    description = models.TextField()
    year = models.IntegerField()
    km = models.IntegerField()
    # image = models.ImageField(upload_to='uploads/', blank=True, null=True)
    # is_active = models
