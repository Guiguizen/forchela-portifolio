from rest_framework import serializers
from .models import DivTopo, DivMeio, DivBaixo, Card

class DivTopoSerializer(serializers.ModelSerializer):
    class Meta:
        model = DivTopo
        fields = '__all__'

class DivMeioSerializer(serializers.ModelSerializer):
    class Meta:
        model = DivMeio
        fields = '__all__'

class DivBaixoSerializer(serializers.ModelSerializer):
    class Meta:
        model = DivBaixo
        fields = '__all__'

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = '__all__'