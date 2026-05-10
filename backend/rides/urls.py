from django.urls import path
from .views import (
    create_ride,
    get_rides,
    ride_detail,
)

urlpatterns = [

    path('', get_rides),

    path('create/', create_ride),

    path('<int:pk>/', ride_detail),
]