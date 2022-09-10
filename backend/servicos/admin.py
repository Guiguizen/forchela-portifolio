from django.contrib import admin
from .models import DivTopo, Produto

# Register your models here.

class DivTopoAdmin(admin.ModelAdmin):
    list_display = ('id', 'titulo')
    list_display_links = ('id', 'titulo')
    list_per_page = 25

class ProdutoAdmin(admin.ModelAdmin):
    exclude = ('slug',)
    list_display = ('id', 'titulo', 'sub_titulo', 'slug', 'link')
    list_display_links = ('id', 'titulo')
    list_per_page = 25

admin.site.register(DivTopo, DivTopoAdmin)
admin.site.register(Produto, ProdutoAdmin)