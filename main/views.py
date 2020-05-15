from django.shortcuts import render

# Create your views here.
from django.http import Http404
from django.shortcuts import get_object_or_404, render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views import generic
from django.template import loader

def main(request):
	return render(request, 'main/main.html')

def home(request):
	return render(request, 'main/home.html')

def lesson1(request):
	return render(request, 'lessons/lesson1.html')

def lesson2(request):
	return render(request, 'lessons/lesson2.html')

def lesson3(request):
	return render(request, 'lessons/lesson3.html')

def lessonPage(request):
	return render(request, 'lessons/lessonPage.html')

def hackathon(request):
	return render(request, 'navBar/hackathon.html')

def calendar(request):
	return render(request, 'navBar/calendar.html')

def meetTheTeam(request):
	return render(request, 'navBar/meetTheTeam.html')

def join(request):
	return render(request, 'navBar/join.html')