from django.contrib import admin
from django.urls import path, include
import api.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/products', api.views.product_list),
    path('api/products/<int:id>', api.views.product_list),
]
