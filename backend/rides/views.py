from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from .models import Ride
from .serializers import RideSerializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_ride(request):

    serializer = RideSerializer(data=request.data)

    if serializer.is_valid():

        serializer.save(driver=request.user)

        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED
        )

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )


@api_view(['GET'])
def get_rides(request):

    rides = Ride.objects.all().order_by('-created_at')

    serializer = RideSerializer(rides, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def ride_detail(request, pk):

    try:
        ride = Ride.objects.get(id=pk)

    except Ride.DoesNotExist:

        return Response(
            {'error': 'Ride not found'},
            status=status.HTTP_404_NOT_FOUND
        )

    serializer = RideSerializer(ride)

    return Response(serializer.data)