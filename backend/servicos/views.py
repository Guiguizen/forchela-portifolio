from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .serializers import DivTopoSerializer, ProdutoSerializer
from .models import DivTopo, Produto

# Create your views here.

class DivTopoListView(ListAPIView):
    queryset = DivTopo.objects.order_by('-data_criacao')
    serializer_class = DivTopoSerializer
    permission_classes = (permissions.AllowAny, )

class ProdutoListView(ListAPIView):
    queryset = Produto.objects.order_by('-data_criacao')
    serializer_class = ProdutoSerializer
    permission_classes = (permissions.AllowAny, )
    lookup_field = 'slug'
    