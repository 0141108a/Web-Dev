import {Component, input, output, Pipe, PipeTransform} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import {RouterLink, RouterOutlet} from '@angular/router';
import {LowerCasePipe, UpperCasePipe, DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <div class="user">
      <p>Username: {{ username }}</p>
      <p *ngIf="name">Name from input: {{ name() }}</p>
    </div>
  `,
  styles: [`
    .user {
      padding: 10px;
      background: #e8f4fd;
      border-radius: 5px;
      margin: 5px 0;
    }
  `]
})
export class User {
  username = 'youngTech';
  name = input<string>();
}

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <button (click)="addItem()">Add Item (🐢)</button>
  `
})
export class Child {
  addItemEvent = output<string>();
  addItem() {
    this.addItemEvent.emit('🐢');
  }
}

@Component({
  selector: 'comments',
  standalone: true,
  template: `
    <div class="comments">
      <h3>Comments</h3>
      <p>Great post! 👍</p>
      <p>Thanks for sharing!</p>
      <p>Very informative.</p>
    </div>
  `,
  styles: [`
    .comments {
      padding: 15px;
      background: #fff3e0;
      border-radius: 8px;
      margin: 10px 0;
    }
  `]
})
export class Comments {}

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<h2>🏠 Home Page</h2>`
})
export class Home {}

@Component({
  selector: 'app-user-page',
  standalone: true,
  template: `<h2>👤 User Page</h2>`
})
export class UserPage {}

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    let reverse = '';
    for (let i = value.length - 1; i >= 0; i--) {
      reverse += value[i];
    }
    return reverse;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    RouterLink, 
    RouterOutlet,
    LowerCasePipe,
    UpperCasePipe,
    DecimalPipe,
    DatePipe,
    CurrencyPipe,
    NgOptimizedImage,
    User,
    Child,
    Comments,
    Home,
    UserPage,
    ReversePipe
  ],
  template: `
    <h1>Hello {{ city }}, {{ 1 + 1 }}</h1>
    
    <section>
      <app-user />
    </section>

    @if (isServerRunning) {
      <p>Yes, the server is running</p>
    } @else {
      <p>No, the server is not running</p>
    }

    <h3>Users:</h3>
    @for (user of users; track user.id) {
      <p>{{ user.name }}</p>
    }

    <div [contentEditable]="isEditable">Edit this text</div>

    <section (mouseover)="showSecretMessage()">
      <p>Hover over this section to see a secret message</p>
    </section>
    <p>{{ message }}</p>

    <app-user [name]="'Simran'" />

    <app-child (addItemEvent)="addItem($event)" />
    <p>Items: {{ items.join(', ') }}</p>

    <article>
      <p>
        Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
        feature that makes defer loading content the easiest and most ergonomic it could possibly be.
        The Angular community is also filled with amazing contributors and experts that create excellent
        content. The community is welcoming and friendly, and it really is the best community out there.
      </p>
      <p>
        I can't express enough how much I enjoy working with Angular. It offers the best developer
        experience I've ever had. I love that the Angular team puts their developers first and takes
        care to make us very happy. They genuinely want Angular to be the best framework it can be, and
        they're doing such an amazing job at it, too.
      </p>
    </article>

    @defer (on viewport) {
      <comments />
    } @placeholder {
      <p>Future comments</p>
    } @loading (minimum 2s) {
      <p>Loading comments...</p>
    }

    <h3>Optimized Images:</h3>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Priority Image:
        <img ngSrc="www.example.com/image.png" height="600" width="800" priority />
      </li>
    </ul>

    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet />

    <h3>Template-driven Form:</h3>
    <label>
      Favorite Framework:
      <input type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <p>Framework: {{ favoriteFramework }}</p>
    <button (click)="showFramework()">Show Framework</button>

    <h3>Reactive Form with Validation:</h3>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
    
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <label>
        Name
        <input type="text" formControlName="name" />
      </label>
      <div *ngIf="profileForm.get('name')?.invalid && profileForm.get('name')?.touched">
        Name is required
      </div>
      
      <label>
        Email
        <input type="email" formControlName="email" />
      </label>
      <div *ngIf="profileForm.get('email')?.invalid && profileForm.get('email')?.touched">
        Valid email is required
      </div>
      
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>

    <h3>Pipes Examples:</h3>
    <ul>
      <li>Uppercase: {{ loudMessage | uppercase }}</li>
      <li>Lowercase: {{ username | lowercase }}</li>
      <li>Number with decimal: {{ num | number:'3.2-2' }}</li>
      <li>Date with format: {{ birthday | date:'medium' }}</li>
      <li>Currency: {{ cost | currency }}</li>
      <li>Custom pipe: Reverse Machine: {{ word | reverse }}</li>
    </ul>
  `,
  styles: [`
    :host {
      color: #a144eb;
      display: block;
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    nav {
      margin: 20px 0;
      padding: 10px;
      background: #f0f0f0;
      border-radius: 5px;
    }
    a {
      margin: 0 10px;
      text-decoration: none;
      color: #667eea;
    }
    section {
      margin: 20px 0;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    button {
      margin: 5px;
      padding: 8px 16px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    input {
      margin: 5px;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    label {
      display: block;
      margin: 10px 0;
    }
    article {
      max-height: 200px;
      overflow-y: auto;
      margin: 20px 0;
      padding: 15px;
      background: #f9f9f9;
      border-radius: 8px;
    }
  `]
})
export class App {
  city = 'San Francisco';
  isServerRunning = true;
  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];
  isEditable = true;
  message = '';
  items: string[] = [];
  favoriteFramework = '';
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  loudMessage = 'we think you are doing great!';
  username = 'youngTech';
  num = 103.1234;
  birthday = new Date(2023, 3, 15);
  cost = 1234.56;
  word = 'Hello World';

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }

  addItem(item: string) {
    this.items.push(item);
  }

  showFramework() {
    alert(this.favoriteFramework);
  }

  handleSubmit() {
    if (this.profileForm.valid) {
      alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
    }
  }
}