from django.urls import path, include
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('products', views.product_list),
    path('products/<int:id>', views.product_list),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)