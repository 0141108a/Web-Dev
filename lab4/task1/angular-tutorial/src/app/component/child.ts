import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button (click)="addItem()">Add Item</button>
  `,
  standalone: true
})
export class Child {
  addItemEvent = output<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
