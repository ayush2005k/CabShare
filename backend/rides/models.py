from django.db import models
from django.conf import settings


class Ride(models.Model):

    STATUS_CHOICES = (
        ('scheduled', 'Scheduled'),
        ('ongoing', 'Ongoing'),
        ('completed', 'Completed'),
    )

    driver = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    start_location = models.CharField(max_length=255)

    end_location = models.CharField(max_length=255)

    total_seats = models.IntegerField()

    available_seats = models.IntegerField()

    departure_time = models.DateTimeField()

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='scheduled'
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.start_location} → {self.end_location}'