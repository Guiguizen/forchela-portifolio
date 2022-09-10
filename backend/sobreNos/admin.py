from django.contrib import admin
from .models import DivTopo, DivMeio, DivBaixo, Card

# Register your models here.

class DivTopoAdmin(admin.ModelAdmin):
    list_display = ('id', 'titulo')
    list_display_links = ('id', 'titulo')
    list_per_page = 25

class DivMeioAdmin(admin.ModelAdmin):
    list_display = ('id', 'titulo')
    list_display_links = ('id', 'titulo')
    list_per_page = 25

class DivBaixoAdmin(admin.ModelAdmin):
    list_display = ('id', 'titulo')
    list_display_links = ('id', 'titulo')
    list_per_page = 25

class CardAdmin(admin.ModelAdmin):
    list_display = ('id', 'titulo')
    list_display_links = ('id', 'titulo')
    list_per_page = 25

admin.site.register(DivTopo, DivTopoAdmin)
admin.site.register(DivMeio, DivMeioAdmin)
admin.site.register(DivBaixo, DivBaixoAdmin)
admin.site.register(Card, CardAdmin)