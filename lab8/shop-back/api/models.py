from django.db import models

class Category(models.Model):
    """Модель категории товаров"""
    name = models.CharField(max_length=100, verbose_name="Название категории")
    
    class Meta:
        verbose_name_plural = "Categories"
    
    def __str__(self):
        return self.name

class Product(models.Model):
    """Модель товара"""
    name = models.CharField(max_length=200, verbose_name="Название")
    price = models.FloatField(verbose_name="Цена")
    description = models.TextField(verbose_name="Описание")
    count = models.IntegerField(verbose_name="Количество на складе")
    is_active = models.BooleanField(default=True, verbose_name="Активен")
    category = models.ForeignKey(
        Category, 
        on_delete=models.CASCADE, 
        related_name='products',
        verbose_name="Категория"
    )
    
    def __str__(self):
        return self.name