import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';
import { CartModel } from './cart/cart.model';
import { Pizza } from './order-pizza/order.model';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  private subject = new BehaviorSubject<any>(1);
  pizzaData:CartModel[]=[];
  constructor() { }
  sendMsg(product:any){
    // console.log(product);
    let productExists=false;

    for(let i in this.pizzaData){
      if(this.pizzaData[i].id===product.id){
          this.pizzaData[i].qty++;
          productExists=true;
          break;
      }
    }
    if(!productExists){
      this.pizzaData.push({id:product.id,type:product.type,price:product.price,name:product.name,image:product.image,qty:1});
    }
    this.subject.next(this.pizzaData);
  }
  getMsg(){
    return this.subject.asObservable();
  }
}
