from django.urls import path

from . import views

app_name ='app'

urlpatterns = [
    path('hackathon', views.main, name = 'main'),
    path('home', views.home, name = 'home'),
    path('lesson1', views.lesson1, name = 'lesson1'),
    path('lesson2', views.lesson2, name = 'lesson2'),
    path('lesson3', views.lesson3, name = 'lesson3'),
    path('', views.hackathon, name = 'hackathon'),
    path('calendar', views.calendar, name = 'calendar'),
    path('meetTheTeam', views.meetTheTeam, name = 'meetTheTeam'),
    path('join', views.join, name = 'join'),
    path('lessonPage', views.lessonPage, name = 'lessonPage'),
]