from django.conf.urls import url

from hireme import views


urlpatterns = [
    url(r'^thankyou/', views.thankyou),
    url(r'^$', views.index),
]
