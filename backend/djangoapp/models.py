from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
import datetime

# Car Make model
class CarMake(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    # Optional: you can add logo, country, etc. as fields

    def __str__(self):
        return self.name


# Car Model model
class CarModel(models.Model):
    car_make = models.ForeignKey(CarMake, on_delete=models.CASCADE)  # Many-to-One
    dealer_id = models.IntegerField(null=True, blank=True)  # refers to dealer id in your database
    name = models.CharField(max_length=100)

    CAR_TYPES = [
        ('SEDAN', 'Sedan'),
        ('SUV', 'SUV'),
        ('WAGON', 'Wagon'),
        ('TRUCK', 'Truck'),
        ('COUPE', 'Coupe'),
    ]
    type = models.CharField(max_length=10, choices=CAR_TYPES, default='SUV')

    year = models.IntegerField(
        default=datetime.date.today().year,
        validators=[
            MaxValueValidator(datetime.date.today().year),
            MinValueValidator(2015)
        ]
    )

    def __str__(self):
        return f"{self.car_make.name} {self.name} ({self.year})"


# Dealer model
class Dealer(models.Model):
    dealer_name = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    address = models.TextField()
    zip_code = models.CharField(max_length=10)
    state = models.CharField(max_length=100)
    review = models.TextField()

    def __str__(self):
        return self.dealer_name



# Review model
class DealerReview(models.Model):
    car_make = models.ForeignKey(CarMake, on_delete=models.CASCADE)   # Car Brand
    dealer_name = models.ForeignKey(Dealer, on_delete=models.CASCADE, null=True, blank=True)  # Optional
    car_year = models.DateField(null=True, blank=True)
    purchase_date = models.DateField(null=True, blank=True)

    rating = models.IntegerField(
        validators=[
            MinValueValidator(1),
            MaxValueValidator(5)
        ]
    )
    comment = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.car_make.name} - {self.rating} Stars"
