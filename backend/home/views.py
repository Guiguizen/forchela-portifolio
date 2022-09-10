from urllib import request
from django.shortcuts import render
from .serializers import DivTopoSerializer, DivInformacaoSerializer, DivMeioSerializer, DivBaixoSerializer, FooterSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import DivTopo, DivInformacao, DivMeio, DivBaixo, Footer
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import generics
from rest_framework import permissions

# Create your views here.

class DivTopoListView(ListAPIView):
    queryset = DivTopo.objects.order_by('-data_criacao')
    serializer_class = DivTopoSerializer
    permission_classes = (permissions.AllowAny, )

class DivTopoDetailView(RetrieveAPIView):
    queryset = DivTopo.objects.order_by('-data_criacao')
    serializer_class = DivTopoSerializer
    permission_classes = (permissions.AllowAny, )

class DivInformacaoListView(ListAPIView):
    queryset = DivInformacao.objects.order_by('-data_criacao')
    serializer_class = DivInformacaoSerializer
    permission_classes = (permissions.AllowAny, )

class DivInformacaoDetailView(RetrieveAPIView):
    queryset = DivInformacao.objects.order_by('-data_criacao')
    serializer_class = DivInformacaoSerializer
    permission_classes = (permissions.AllowAny, )

class DivMeioListView(ListAPIView):
    queryset = DivMeio.objects.order_by('-data_criacao')
    serializer_class = DivMeioSerializer
    permission_classes = (permissions.AllowAny, )

class DivMeioDetailView(RetrieveAPIView):
    queryset = DivMeio.objects.order_by('-data_criacao')
    serializer_class = DivMeioSerializer
    permission_classes = (permissions.AllowAny, )

class DivBaixoListView(ListAPIView):
    queryset =  DivBaixo.objects.order_by('-data_criacao')
    serializer_class =  DivBaixoSerializer
    permission_classes = (permissions.AllowAny, )

class DivBaixoDetailView(RetrieveAPIView):
    queryset =  DivBaixo.objects.order_by('-data_criacao')
    serializer_class =  DivBaixoSerializer
    permission_classes = (permissions.AllowAny, )

class FooterListView(ListAPIView):
    queryset =  Footer.objects.order_by('-data_criacao')
    serializer_class =  FooterSerializer
    permission_classes = (permissions.AllowAny, )

class FooterDetailView(RetrieveAPIView):
    queryset =  Footer.objects.order_by('-data_criacao')
    serializer_class =  FooterSerializer
    permission_classes = (permissions.AllowAny, )