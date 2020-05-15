from django.urls import path

from . import views

app_name ='main'

urlpatterns = [
    path('', views.main, name = 'main'),
    path('home', views.home, name = 'home'),
    path('lesson1', views.lesson1, name = 'lesson1'),
    path('lesson2', views.lesson2, name = 'lesson2'),
    path('lesson3', views.lesson3, name = 'lesson3'),
    path('lessons', views.lessons, name = 'lessons'),
    path('about', views.about, name = 'about'),
    path('getinvolved', views.getinvolved, name = 'getinvolved')
    path('hackathon', views.hackathon, name = 'hackathon'),
    path('calendar', views.calendar, name = 'calendar'),
]