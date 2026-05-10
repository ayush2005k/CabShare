from django.urls import path
from .views import join_ride

urlpatterns = [

    path('join/<int:pk>/', join_ride),
]