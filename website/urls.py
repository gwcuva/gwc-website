from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.contrib.auth import logout

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('', include('main.urls')),
]