from django.shortcuts import render
from django.http import JsonResponse

def data_view(request):
    return JsonResponse({'message': 'Hello, this is your API data!'})


