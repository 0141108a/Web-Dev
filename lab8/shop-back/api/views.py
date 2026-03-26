from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

@api_view(['GET'])
def product_list(request):
    """Получить список всех активных товаров"""
    products = Product.objects.filter(is_active=True)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product_detail(request, id):
    """Получить один товар по ID"""
    product = get_object_or_404(Product, id=id, is_active=True)
    serializer = ProductSerializer(product)
    return Response(serializer.data)

@api_view(['GET'])
def category_list(request):
    """Получить список всех категорий"""
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def category_detail(request, id):
    """Получить одну категорию по ID"""
    category = get_object_or_404(Category, id=id)
    serializer = CategorySerializer(category)
    return Response(serializer.data)

@api_view(['GET'])
def category_products(request, id):
    """Получить товары по категории"""
    category = get_object_or_404(Category, id=id)
    products = category.products.filter(is_active=True)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)