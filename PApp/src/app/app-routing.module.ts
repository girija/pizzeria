import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildUrPizzaComponent } from './build-ur-pizza/build-ur-pizza.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderPizzaComponent } from './order-pizza/order-pizza.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'orderPizza',component:OrderPizzaComponent},
  {path:'buildUrPizza',component:BuildUrPizzaComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
