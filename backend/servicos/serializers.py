from rest_framework import serializers
from .models import DivTopo, Produto

class DivTopoSerializer(serializers.ModelSerializer):
    class Meta:
        model = DivTopo
        fields = '__all__'

class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = '__all__'