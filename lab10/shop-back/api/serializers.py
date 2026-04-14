from rest_framework import serializers
from .models import Category, Product


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')

    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'price',
            'description',
            'count',
            'is_active',
            'category',
            'category_name',
        ]

    def validate(self, data):
        if self.instance is None:
            count = data.get('count')
            is_active = data.get('is_active')

            if count == 0 or is_active is False:
                raise serializers.ValidationError(
                    "Нельзя создать продукт: count=0 или is_active=False"
                )

        return data