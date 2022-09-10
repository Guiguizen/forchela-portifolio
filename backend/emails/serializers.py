from dataclasses import fields
from rest_framework import serializers
from .models import Emails

class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emails
        fields = '__all__'

class CreateEmailSerializer(serializers.Serializer):
    class Meta:
        model = Emails
        fields = ('nome', 'email_origem', 'texto')