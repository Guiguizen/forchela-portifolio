from django.urls import path
from . import views

urlpatterns = [
    path('div-topo', views.DivTopoListView.as_view()),
    path('produto', views.ProdutoListView.as_view()),
]