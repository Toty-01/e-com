import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model'

@Component({
  selector: 'app-product-box',
  templateUrl: `product-box.component.html`,
  styleUrls: ['style.css'],
})

export class ProductBoxComponent {
@Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'nike air',
    price: 200,
    category: 'shoes',
    description: "il s'agit de la paire la plus recherchée de l'univers tout entier",
    image: 'https://via.placeholder.com/150'
  };
  @Output() addToCart = new EventEmitter();

  onAddToCard(): void {
    this.addToCart.emit(this.product);
  }

}
