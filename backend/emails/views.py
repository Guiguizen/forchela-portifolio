from os import stat
from rest_framework import permissions
from .models import Emails
from rest_framework.generics import ListAPIView, RetrieveAPIView
from django.views.generic import ListView
from rest_framework import generics, status
from .serializers import EmailSerializer, CreateEmailSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

class EmailsListView(ListAPIView):
    queryset = Emails.objects.order_by('-data_criacao')
    serializer_class = EmailSerializer
    permission_classes = (permissions.AllowAny, )

    def post(self, request):
        serializer = EmailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)