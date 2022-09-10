from django.db import models
from datetime import datetime

# Create your models here.

class DivTopo(models.Model):
    titulo = models.CharField(max_length=255)
    data_criacao = models.DateTimeField(default=datetime.now, blank=True)

class DivMeio(models.Model):
    titulo = models.CharField(max_length=255)
    sub_titulo = models.TextField()
    texto = models.TextField()
    data_criacao = models.DateTimeField(default=datetime.now, blank=True)

class DivBaixo(models.Model):
    titulo = models.CharField(max_length=255)
    texto = models.TextField()
    data_criacao = models.DateTimeField(default=datetime.now, blank=True)

class Card(models.Model):
    titulo = models.CharField(max_length=255)
    texto = models.TextField()
    data_criacao = models.DateTimeField(default=datetime.now, blank=True)
