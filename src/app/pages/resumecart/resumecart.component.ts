import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model'
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: `resumecart.component.html`,
  styleUrls: ['style.css']
})
export class ResumecartComponent implements OnInit {
  cart: Cart = { items: [{
    product: "https://via.placeholder.com/150",
    name: "Montre Diesel",
    price: 150,
    quantity: 1,
    id: 1,
  },{
    product: "https://via.placeholder.com/150",
    name: "Montre Gucchi",
    price: 250,
    quantity: 2,
    id: 2,
  }
]};

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]
  
  constructor(private cartService: CartService) {}

  ngOnInit():void {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }
  getTotal(items: Array<CartItem>): number {
   return this.cartService.getTotal(items);
  }
  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }
  onClearCart(): void {
    this.cartService.clearCart();
  }
  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }
  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }
}
