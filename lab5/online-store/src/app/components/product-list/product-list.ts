import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  @Input() products: Product[] = [];
  @Input() categoryName: string = '';
  @Output() like = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onLike(productId: number): void {
    this.like.emit(productId);
  }

  onDelete(productId: number): void {
    this.delete.emit(productId);
  }
}