from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
import api.views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
    path('api/products', api.views.product_list),
    path('api/products/<int:id>', api.views.product_list),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
