from turtle import right
from django.http import HttpResponse
from .models import TemperatureSensor as Temp, HumiditySensor as Humi, VibratorSensor as Vib, ProximitySensor as Prox, LightDetector as LightD, DetectorSensor as Detector
from django.shortcuts import render
from django.core import serializers
from django.http import JsonResponse
import random
import json

def index(request):
    sensor_value_list = Temp.objects.all().order_by('-reg_date').values()[:5]
    context = {
        'sensor_value_list': sensor_value_list,
    }
    return render(request, 'sensor/index.html', context)

def getTemp(request, cnt):
    results = list(Temp.objects.all().order_by('-reg_date').values())[:cnt][::-1]
    return JsonResponse(results, safe=False)

def getHumi(request, cnt):
    results = list(Humi.objects.all().order_by('-reg_date').values())[:cnt][::-1]
    return JsonResponse(results, safe=False)

def getVib(request, cnt):
    results = list(Vib.objects.all().order_by('-reg_date').values())[:cnt][::-1]
    return JsonResponse(results, safe=False)

def getProx(request, cnt):
    results = list(Prox.objects.all().order_by('-reg_date').values())[:cnt][::-1]
    return JsonResponse(results, safe=False)

def setTemp(request):
    try:
        Temp.objects.create(value = request.POST['value'])
        return JsonResponse({"message": "OK"}, status=200)
    except KeyError:
        return JsonResponse({"message": "KEY_ERROR"}, status=400)

def setHumi(request):
    try:
        Humi.objects.create(value = request.POST['value'])
        return JsonResponse({"message": "OK"}, status=200)
    except KeyError:
        return JsonResponse({"message": "KEY_ERROR"}, status=400)

def setVib(request):
    try:
        Vib.objects.create(value = request.POST['value'])
        return JsonResponse({"message": "OK"}, status=200)
    except KeyError:
        return JsonResponse({"message": "KEY_ERROR"}, status=400)


def setProx(request):
    try:
        Prox.objects.create(value = request.POST['value'])
        return JsonResponse({"message": "OK"}, status=200)
    except KeyError:
        return JsonResponse({"message": "KEY_ERROR"}, status=400)

# Create your views here.

# 조도센서
def getLightD(request, cnt):
    results = list(LightD.objects.all().order_by('-reg_date').values())[:cnt][::-1]
    return JsonResponse(results, safe=False)

def setLightD(request):
    try:
        LightD.objects.create(value = request.POST['value'])
        return JsonResponse({"message": "OK"}, status=200)
    except KeyError:
        return JsonResponse({"message": "KEY_ERROR"}, status=400)


# 장애물 센서
def getDetector(request, cnt):
    results = list(Detector.objects.all().order_by('-reg_date').values())[:cnt][::-1]
    return JsonResponse(results, safe=False)

def setDetector(request):
    try:
        Detector.objects.create(value = request.POST['value'])
        return JsonResponse({"message": "OK"}, status=200)
    except KeyError:
        return JsonResponse({"message": "KEY_ERROR"}, status=400)