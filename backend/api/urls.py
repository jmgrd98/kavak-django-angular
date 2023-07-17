from django.urls import path, include
from . import views
from .views import ProductList
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('products', ProductList.as_view()),
    path('products/search', views.search),
    path('products/<int:id>', views.ProductDetail.as_view()),
    path('save_file', views.save_file),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)