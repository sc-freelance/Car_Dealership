from rest_framework import serializers # Importing serializers from Django REST Framework
from .models import Dealer, DealerReview # Importing Dealer and DealerReview models

# Dealer Serializer
class DealerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dealer
        fields = '__all__'

# Review Serializer
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = DealerReview
        fields = '__all__'