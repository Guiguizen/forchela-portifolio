from django.contrib import admin
from .models import DivTopo, DivInformacao, DivMeio, DivBaixo, Footer

# Register your models here.

class DivTopoAdmin(admin.ModelAdmin):
    list_display = ('id', 'titulo', 'sub_titulo')
    list_display_links = ('id', 'titulo')
    list_per_page = 25

class DivInformacaoAdmin(admin.ModelAdmin):
    list_display = ('id', 'titulo1', 'titulo2', 'titulo3')
    list_display_links = ('id', 'titulo1', 'titulo2', 'titulo3')
    list_per_page = 25

class DivMeioAdmin(admin.ModelAdmin):
    list_display = ('id', 'titulo')
    list_display_links = ('id', 'titulo')
    list_per_page = 25

class DivBaixoAdmin(admin.ModelAdmin):
    list_display = ('id','titulo', 'texto')
    list_display_links = ('id','titulo')
    list_per_page = 25

class FooterAdmin(admin.ModelAdmin):
    list_display = ('id', 'telefone', 'email', 'link_instagram', 'link_facebook')
    list_display_links = ('id', 'telefone')
    list_per_page = 25

admin.site.register(DivTopo, DivTopoAdmin)
admin.site.register(DivInformacao, DivInformacaoAdmin)
admin.site.register(DivMeio, DivMeioAdmin)
admin.site.register(DivBaixo, DivBaixoAdmin)
admin.site.register(Footer, FooterAdmin)