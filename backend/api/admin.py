from django.contrib import admin

# Register your models here.
from .models import Product, Admin

admin.site.register(Product)
admin.site.register(Admin)