from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('getTemp/<int:cnt>', views.getTemp, name='getTemp'),
    path('getHumi/<int:cnt>', views.getHumi, name='getHumi'),
    path('getVib/<int:cnt>', views.getVib, name='getVib'),
    path('getProx/<int:cnt>', views.getProx, name='getProx'),
    path('getLightD/<int:cnt>', views.getLightD, name= 'getLightD'),
    path('getLightS/<int:cnt>', views.getLightS, name= 'getLightS'),
    path('getDetector/<int:cnt>', views.getDetector, name= 'getDetector'),
    path('getBuzzer/<int:cnt>', views.getBuzzer, name= 'getBuzzer'),

    path('setTemp', views.setTemp, name='setTemp'),
    path('setHumi', views.setHumi, name='setHumi'),
    path('setVib', views.setVib, name='setVib'),
    path('setProx', views.setProx, name='setProx'),
    path('setLightD', views.setLightD, name= 'setLightD'),
    path('setLightS', views.setLightS, name= 'setLightS'),
    path('setDetector', views.setDetector, name= 'setDetector'),
    path('setBuzzer', views.setBuzzer, name= 'setBuzzer')
]
