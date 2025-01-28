from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from userauth.models import CustomUser
from django.contrib.auth.hashers import make_password
from django.http import JsonResponse
import json

# Create your views here.

@csrf_exempt
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)

        name = data.get('name')
        email = data.get('email')
        password = data.get('password')

        if CustomUser.objects.filter(email=email).exists():
            return JsonResponse({'message': 'Email already exists.'}, status=400)
        
        user = CustomUser.objects.create(
            name=name,
            email=email,
            password=make_password(password)
        )

        user.save()

    return JsonResponse({'message': 'User created successfully.'}, status=201)
