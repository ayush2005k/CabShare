from rest_framework import serializers
from .models import Booking


class BookingSerializer(serializers.ModelSerializer):

    rider_email = serializers.ReadOnlyField(source='rider.email')

    class Meta:
        model = Booking

        fields = [
            'id',
            'ride',
            'rider',
            'rider_email',
            'booked_at',
        ]

        read_only_fields = ['rider']