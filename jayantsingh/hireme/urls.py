from django.conf.urls import url

from hireme import views

urlpatterns = [
    url(r'^$', views.index),
]
