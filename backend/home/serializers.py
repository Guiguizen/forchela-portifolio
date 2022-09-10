from cgitb import lookup
from rest_framework import serializers
from .models import DivTopo, DivInformacao, DivMeio, DivBaixo, Footer

class DivTopoSerializer(serializers.ModelSerializer):
    class Meta:
        model = DivTopo
        fields = '__all__'
        
class DivInformacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = DivInformacao
        fields = '__all__'

class DivMeioSerializer(serializers.ModelSerializer):
    class Meta:
        model = DivMeio
        fields = '__all__'

class DivBaixoSerializer(serializers.ModelSerializer):
    class Meta:
        model = DivBaixo
        fields = '__all__'

class FooterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Footer
        fields = '__all__'