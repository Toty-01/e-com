import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model'

@Component({
  selector: 'app-product-box',
  templateUrl: `product-box.component.html`,
  styleUrls: ['style.css'],
})

export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();

  onAddToCard(): void {
    this.addToCart.emit(this.product);
  }

}
