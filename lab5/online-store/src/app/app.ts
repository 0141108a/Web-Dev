import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { ProductList } from './components/product-list/product-list';
import { Category } from './models/category.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedCategoryName: string = '';

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number, categoryName: string): void {
    this.selectedCategoryId = categoryId;
    this.selectedCategoryName = categoryName;
  }

  getProductsByCategory() {
    if (this.selectedCategoryId) {
      return this.productService.getProductsByCategory(this.selectedCategoryId);
    }
    return [];
  }

  onLike(productId: number): void {
    this.productService.likeProduct(productId);
  }

  onDelete(productId: number): void {
    this.productService.deleteProduct(productId);
  }
}