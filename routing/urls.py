from django.conf.urls import url
from routing import views

urlpatterns = [
    url(r'^chat/$', views.chat, name='chat'),
]
