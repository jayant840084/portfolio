from django.conf.urls import url

from mockSiteHexagon import views

urlpatterns = [
    url(r'^$', views.index),
]
