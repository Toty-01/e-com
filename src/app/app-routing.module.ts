import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { PayementComponent } from './pages/payement/payement.component';
import { ResumecartComponent } from './pages/resumecart/resumecart.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'cart', component: CartComponent },
{ path: 'resumecart', component: ResumecartComponent },
{ path: 'payement', component: PayementComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
