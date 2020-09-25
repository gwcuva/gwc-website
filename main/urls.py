from django.urls import path

from . import views
from django.views.generic.base import TemplateView

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
    path(
        '.well-known/pki-validation/26135DB70D3412BDE5E30A182550DCDD.txt',
        TemplateView.as_view(template_name="26135DB70D3412BDE5E30A182550DCDD.txt", content_type="text/plain"),
    ),
]