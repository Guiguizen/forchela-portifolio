from distutils.command.upload import upload
from django.db import models
from datetime import datetime

class DivTopo(models.Model):
    titulo = models.CharField(max_length=255)
    sub_titulo = models.TextField()
    data_criacao = models.DateTimeField(default=datetime.now, blank=True)

class DivInformacao(models.Model):
    titulo1 = models.CharField(max_length=255)
    texto1 = models.TextField()
    titulo2 = models.CharField(max_length=255)
    texto2 = models.TextField()
    titulo3 = models.CharField(max_length=255)
    texto3 = models.TextField()
    data_criacao = models.DateTimeField(default=datetime.now, blank=True)

class DivMeio(models.Model):
    imagem = models.ImageField(upload_to='photos/%Y/%m/%d/')
    titulo = models.CharField(max_length=255)
    texto = models.TextField()
    data_criacao = models.DateTimeField(default=datetime.now, blank=True)

class DivBaixo(models.Model):
    titulo = models.CharField(max_length=255)
    texto = models.TextField()
    imagem1 = models.ImageField(upload_to='photos/%Y/%m/%d/')
    imagem2 = models.ImageField(upload_to='photos/%Y/%m/%d/')
    imagem3 = models.ImageField(upload_to='photos/%Y/%m/%d/')
    data_criacao = models.DateTimeField(default=datetime.now, blank=True)

class Footer(models.Model):
    telefone = models.CharField(max_length=14, help_text = "Insira por ex: (11)9999-9999")
    email = models.CharField(max_length=255, help_text = "Insira por ex: forchela@gmail.com")
    link_instagram = models.CharField(max_length=255)
    link_facebook = models.CharField(max_length=255)
    data_criacao = models.DateTimeField(default=datetime.now, blank=True)
