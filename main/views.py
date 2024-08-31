from django.shortcuts import render
from rest_framework import generics
from . import models
from . import serializers

class VendorList(generics.ListAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorSerializer
    
class VendorDetail(generics.ListAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorSerializer
    
class ProductList(generics.ListAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    




