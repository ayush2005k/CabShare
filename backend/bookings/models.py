from django.db import models
from django.conf import settings
from rides.models import Ride


class Booking(models.Model):

    ride = models.ForeignKey(
        Ride,
        on_delete=models.CASCADE
    )

    rider = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    booked_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('ride', 'rider')

    def __str__(self):
        return f'{self.rider} booked {self.ride}'