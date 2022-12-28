import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model'

@Component({
  selector: 'app-product-box',
  templateUrl: `product-box.component.html`,
  styleUrls: ['style.css'],
})

export class ProductBoxComponent {
@Input() fullWidthMode = false;
  product: Product | undefined;

  onAddToCard(): void {

  }

}
