import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Наушники' },
    { id: 4, name: 'Планшеты' }
  ];

  private products: Product[] = [
    {
      id: 1,
      name: 'iPhone 17 Pro',
      description: 'Смартфон Apple iPhone 17 Pro 256Gb',
      price: 839301,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-oranzhevyi-145467625/?c=750000000',      rating: 5,
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'iPhone 15',
      description: 'Смартфон Apple iPhone 15 128Gb',
      price: 403200,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-chernyi-113137790/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'iPhone 13',
      description: 'Смартфон Apple iPhone 13 128Gb',
      price: 358800,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-nanosim-esim-chernyi-102298404/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Samsung Galaxy A07',
      description: 'Смартфон Samsung Galaxy A07 6/128Gb',
      price: 68700,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'Redmi A3x',
      description: 'Смартфон Redmi A3x 3/64Gb',
      price: 39990,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 1
    },
    {
      id: 6,
      name: 'MacBook Air 13',
      description: 'Apple MacBook Air 13 2020',
      price: 439417,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000&tab=reviews',
      rating: 5,
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'Acer Aspire 3',
      description: 'Acer Aspire 3 15.6"',
      price: 165221,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-medium',
      link:'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-pro-a325-45-zn-n01si-03k--136300221/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'Lenovo IdeaPad 3',
      description: 'Lenovo IdeaPad 3 15.6"',
      price: 237930,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h75/h14/65051456962590.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-512-gb-win-11-15iau7-82rk00ewrk-107333284/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'Thunderobot 911S',
      description: 'Thunderobot 911S Core D',
      price: 496970,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'MacBook Pro 16',
      description: 'Apple MacBook Pro 16 2024',
      price: 2971990,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p5e/p1c/18087106.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2024-16-2-48-gb-ssd-1000-gb-macos-mx2w3ru-a-132850417/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 2
    },
    {
      id: 11,
      name: 'Marshall Major IV',
      description: 'Наушники Marshall Major IV',
      price: 18571,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Apple AirPods 3',
      description: 'Apple AirPods 3 Lightning',
      price: 61990,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'Apple AirPods Max',
      description: 'Apple AirPods Max',
      price: 345391,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h97/h0d/64141045628958.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-serebristyi-100949286/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Apple USB-C',
      description: 'Apple USB-C EarPods',
      price: 10460,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/pc8/41468726.jpg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/naushniki-apple-usb-c-myqy3zm-a-belyi-139440255/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'Huawei Freebuds SE 2',
      description: 'Huawei Freebuds SE 2',
      price: 13449,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/haf/h1d/83684356161566.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-huawei-freebuds-se-2-belyi-113250696/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 3
    },
    {
      id: 16,
      name: 'iPad A16',
      description: 'Apple iPad A16 11"',
      price: 203938,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-rozovyi-138199640/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Xiaomi Redmi Pad 2',
      description: 'Xiaomi Redmi Pad 2 4G',
      price: 129990,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-seryi-140640417/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'iPad Air 11',
      description: 'Apple iPad Air 11 2025',
      price: 324803,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-seryi-137965083/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Huawei MatePad 11.5',
      description: 'Huawei MatePad 11.5',
      price: 199990,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p21/p94/65766995.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-2025-11-5-djuim-8-gb-128-gb-seryi-podarok-145939507/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Samsung Galaxy Tab A9',
      description: 'Samsung Galaxy Tab A9 LTE',
      price: 144697,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf9/hdc/84176279076894.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-lte-8-7-djuim-4-gb-64-gb-sinii-113806822/?c=750000000',
      rating: 5,
      likes: 0,
      categoryId: 4
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  likeProduct(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }

  deleteProduct(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  getAllProducts(): Product[] {
    return this.products;
  }
}