import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard ],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnInit {
  products: Product[] = [];

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: 'Смартфон Apple iPhone 15 Pro Max 256Gb черный',
        description: 'Флагманский смартфон Apple с титановым корпусом, процессором A17 Pro и улучшенной системой камер. Поддержка Dynamic Island и Always-On Display.',
        price: 719889,
        rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/had/86319870181406.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h81/had/86319870181406.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p7d/p75/29469426.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h91/h9f/86319870378014.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-113138363/?c=750000000'
      },
      {
        id: 2,
        name: 'Ноутбук Apple MacBook Pro 16 M3 Max',
        description: 'Профессиональный ноутбук с чипом M3 Max, 48GB памяти и 1TB SSD. Идеален для видеомонтажа, программирования и работы с графикой.',
        price: 1999400,
        rating: 5.0,
        image: 'https://gadgetstore.kz/wa-data/public/shop/products/94/08/894/images/2577/2577.970.jpeg',
        images: [
          'https://gadgetstore.kz/wa-data/public/shop/products/94/08/894/images/2577/2577.970.jpeg',
          'https://static.tildacdn.pro/tild3332-6264-4130-b539-333334313233/image.png',
          'https://gomagcdn.ro/domains2/octo.md/files/product/large/laptop-apple-macbook-pro-16-2-z1ag000je-space-black-m3-pro-36gb-1tb-211255.png'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-16-2-36-gb-ssd-1024-gb-macos-mrw33-115207483/?c=750000000'
      },
      {
        id: 3,
        name: 'Холодильник LG DoorCooling+ GA-B509SQDZ',
        description: 'Двухкамерный холодильник с системой No Frost, линейным инверторным компрессором и технологией DoorCooling+ для равномерного охлаждения.',
        price: 399988,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hd3/64348227600414.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h6f/hd3/64348227600414.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hcf/hc9/64348229959710.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hee/h1b/64348236578846.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/lg-ga-b509mmqm-seryi-101396880/?c=750000000'
      },
      {
        id: 4,
        name: 'Телевизор Samsung UE55DU7100UXCE',
        description: 'LED телевизор 4K с диагональю 55 дюймов, технологией UltraHD и мощным процессором для идеального изображения.',
        price: 278590,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h5e/85887766167582.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hdd/h5e/85887766167582.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h9f/h2f/85887766233118.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h95/hf0/85887766298654.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-ue55du7100uxce-140-sm-chernyi-118907988/?c=750000000'
      },
      {
        id: 5,
        name: 'Пылесос Dyson V15 Detect Absolute',
        description: 'Беспроводной пылесос с лазерной подсветкой, дисплеем и системой фильтрации. Автоматически увеличивает мощность при обнаружении пыли.',
        price: 333700,
        rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pf8/p32/77965058.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pdc/p32/77965057.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=750000000'
      },
      {
        id: 6,
        name: 'Кофемашина DeLonghi Magnifica S ECAM 22.110.SB',
        description: 'Автоматическая кофемашина с встроенной кофемолкой, системой капучинатора и возможностью приготовления различных кофейных напитков.',
        price: 244790,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p85/60216731.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p24/p85/60216731.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p5c/p85/60216733.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p78/p85/60216734.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/kofemashina-delonghi-magnifica-s-ecam-22-110-sb-serebristyi-4400202/?c=750000000'
      },
      {
        id: 7,
        name: 'Стиральная машина LG F2J3HS0W',
        description: 'Узкая стиральная машина с инверторным двигателем, системой пара и интеллектуальным управлением через Wi-Fi.',
        price: 380000,
        rating: 4.9,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfOQoD7ppSbjbb2jP25wsW9Fyc09KK8ZD0JA&s',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfOQoD7ppSbjbb2jP25wsW9Fyc09KK8ZD0JA&s',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgSSXtq98bEv8JcjfOjX1cMOmuKuQJI8tgxg&s',
          'https://api.technodom.kz/f3/api/v1/images/261233_3.jpg'
        ],
        link: 'https://kaspi.kz/shop/p/lg-f2j3hs0w-belyi-105728282/?c=750000000'
      },
      {
        id: 8,
        name: 'Наушники Sony WH-1000XM5 черный',
        description: 'Беспроводные наушники с активным шумоподавлением, высоким разрешением звука и до 30 часов работы от аккумулятора.',
        price: 134999,
        rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000'
      },
      {
        id: 9,
        name: 'Смарт-часы Samsung Galaxy Watch6 Classic 47 мм черный',
        description: 'Премиальные умные часы с вращающимся безелем, измерением ЭКГ, составом тела и расширенным мониторингом здоровья.',
        price: 440000,
        rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hfc/h1f/82621670522910.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hfc/h1f/82621670522910.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h51/h54/82621670588446.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hdb/ha0/82621670555678.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch6-classic-47-mm-chernyi-112404540/?c=750000000'
      },
      {
        id: 10,
        name: 'Игровая консоль Sony PlayStation 5 Slim',
        description: 'Игровая консоль нового поколения с SSD-накопителем, поддержкой 4K и трассировкой лучей для максимального погружения в игры.',
        price: 302089,
        rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
      }
    ];
  }
}