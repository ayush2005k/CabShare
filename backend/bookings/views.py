from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from rides.models import Ride
from .models import Booking
from .serializers import BookingSerializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def join_ride(request, pk):

    try:
        ride = Ride.objects.get(id=pk)

    except Ride.DoesNotExist:

        return Response(
            {'error': 'Ride not found'},
            status=status.HTTP_404_NOT_FOUND
        )

    # prevent duplicate booking
    if Booking.objects.filter(
        ride=ride,
        rider=request.user
    ).exists():

        return Response(
            {'error': 'You already joined this ride'},
            status=status.HTTP_400_BAD_REQUEST
        )

    # prevent overbooking
    if ride.available_seats <= 0:

        return Response(
            {'error': 'No seats available'},
            status=status.HTTP_400_BAD_REQUEST
        )

    booking = Booking.objects.create(
        ride=ride,
        rider=request.user
    )

    # reduce seat count
    ride.available_seats -= 1
    ride.save()

    serializer = BookingSerializer(booking)

    return Response(
        serializer.data,
        status=status.HTTP_201_CREATED
    )