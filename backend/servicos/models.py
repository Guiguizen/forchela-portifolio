from email.policy import default
from django.db import models
from django.db.models.signals import pre_save
from forchela.utils import unique_slug_generator
from datetime import datetime

# Create your models here.
class DivTopo(models.Model):
    titulo = models.CharField(max_length=255)
    data_criacao = models.DateTimeField(default=datetime.now, blank=True)

class Produto(models.Model):
    titulo = models.CharField(max_length=255)
    sub_titulo = models.TextField()
    imagem = models.ImageField(upload_to='photos/%Y/%m/%d/')
    slug = models.SlugField(max_length=150, unique=True)
    link = models.CharField(max_length=255, blank=True, default='https://www.instagram.com/forchela.andercorrea/')
    data_criacao = models.DateTimeField(default=datetime.now)


def slug_save(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance, instance.titulo, instance.slug)

pre_save.connect(slug_save, sender=Produto)
