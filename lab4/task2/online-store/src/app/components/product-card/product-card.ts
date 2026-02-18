import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard {
  @Input() product!: Product;
  currentImageIndex = 0;
  showGallery = false;

  getStars(): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }

  getStarType(star: number): string {
    if (star <= Math.floor(this.product.rating)) {
      return 'full';
    } else if (star <= Math.ceil(this.product.rating) && this.product.rating % 1 !== 0) {
      return 'half';
    }
    return 'empty';
  }

  shareOnWhatsApp(): void {
    const text = encodeURIComponent(`Посмотрите этот товар: ${this.product.name}`);
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  }

  shareOnTelegram(): void {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  nextImage(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  previousImage(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }

  setImage(index: number, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.currentImageIndex = index;
  }

  toggleGallery(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.showGallery = !this.showGallery;
  }

  handleImageError(event: any): void {
    event.target.src = 'https://via.placeholder.com/300x300?text=Нет+фото';
  }
}