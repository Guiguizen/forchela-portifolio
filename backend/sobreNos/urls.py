from django.urls import path
from . import views

urlpatterns = [
    path('div-topo', views.DivTopoListView.as_view()),
    path('div-meio', views.DivMeioListView.as_view()),
    path('div-baixo', views.DivBaixoListView.as_view()),
    path('card', views.CardListView.as_view()),
]