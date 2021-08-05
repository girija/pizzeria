import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../messenger.service';
import { CartModel } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  pizzaData:CartModel[]=[];
  
  totalAmount:any=0;
  constructor(private msg:MessengerService) {
   }
  ngOnInit() {
    //console.log(this.pizzaData)
    this.msg.getMsg().subscribe(product => {
      this.pizzaData=product;
    })
  }
  
  ngDoCheck(){
    // for(let i in this.pizzaData){
    //   this.totalAmount=this.totalAmount+(this.pizzaData[i].qty*this.pizzaData[i].price);
    // }
    this.totalAmount=this.pizzaData.reduce((acc: any, item: any) => item.price*item.qty + acc,0);
  }
  remove(id:any):void{
    const index = this.pizzaData.findIndex((pizza)=>pizza.id==id);
    this.pizzaData.splice(index,1);
  }
}
