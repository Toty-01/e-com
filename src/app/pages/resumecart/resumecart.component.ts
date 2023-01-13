import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model'

@Component({
  selector: 'app-resumecart',
  templateUrl: `resumecart.component.html`,
  styleUrls: ['style.css']
})
export class ResumecartComponent {
  @Input() fullWidthMode = false;
  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();

  onAddToCard(): void {
    this.addToCart.emit(this.product);
  }

}
