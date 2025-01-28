from rest_framework import serializers
from .models import CustomUser

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=128, min_length=8, write_only=True)

    class Meta:
        model = CustomUser
        fields = ['name', 'email', 'password']

    def create(self, validated_data):
        return CustomUser.objects.create_user(**validated_data)