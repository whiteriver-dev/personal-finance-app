from django.urls import path
from . import views

urlpatterns = [
    path('data/', views.data_view, name='data'),  # Your data endpoint
]