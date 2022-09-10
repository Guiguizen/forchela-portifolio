from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .serializers import DivTopoSerializer, DivMeioSerializer, DivBaixoSerializer, CardSerializer
from .models import DivTopo, DivMeio, DivBaixo, Card

class DivTopoListView(ListAPIView):
    queryset = DivTopo.objects.order_by('-data_criacao')
    serializer_class = DivTopoSerializer
    permission_classes = (permissions.AllowAny, )

class DivMeioListView(ListAPIView):
    queryset = DivMeio.objects.order_by('-data_criacao')
    serializer_class = DivMeioSerializer
    permission_classes = (permissions.AllowAny, )

class DivBaixoListView(ListAPIView):
    queryset = DivBaixo.objects.order_by('-data_criacao')
    serializer_class = DivBaixoSerializer
    permission_classes = (permissions.AllowAny, )

class CardListView(ListAPIView):
    queryset = Card.objects.order_by('-data_criacao')
    serializer_class = CardSerializer
    permission_classes = (permissions.AllowAny, )


# Create your views here.
