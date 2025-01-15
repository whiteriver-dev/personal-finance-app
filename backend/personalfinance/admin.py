from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import Transaction  # Replace with your model name

admin.site.register(Transaction)  # This will make the model appear in the admin