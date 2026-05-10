from rest_framework import serializers
from .models import Ride


class RideSerializer(serializers.ModelSerializer):

    driver_email = serializers.ReadOnlyField(source='driver.email')

    class Meta:
        model = Ride

        fields = [
            'id',
            'driver',
            'driver_email',
            'start_location',
            'end_location',
            'total_seats',
            'available_seats',
            'departure_time',
            'status',
            'created_at',
        ]

        read_only_fields = ['driver']