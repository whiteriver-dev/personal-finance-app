from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Custom User Manager

class CustomUserManager(BaseUserManager): # Custom User Manager for Custom User Model - handles user creation
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if not name:
            raise ValueError('Users must have a name')
        if not password:
            raise ValueError('Users must have a password')
        user = self.model(
            email=email,
            name=name
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

# Custom User Model

class CustomUser(AbstractBaseUser, PermissionsMixin): # Custom User Model with email as unique identifier
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email



