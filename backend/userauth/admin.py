from django.contrib import admin
from .models import CustomUser

# Register your models here.

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('email', 'name', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('email', 'name')
    ordering = ('email',)
