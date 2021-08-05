import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../messenger.service';

import { WebRequestService } from '../web-request.service';
import { Pizza } from './order.model';

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent implements OnInit {
  pizzaData:Pizza[]=[];
  
  constructor(private webrequest:WebRequestService,private msg:MessengerService) { }

  ngOnInit(): void {
    this.webrequest.get('orderPizza').subscribe((response:any)=>{
      this.pizzaData=response.pizza;
    })
  }
  onAdd(pizza:any):void{
    alert(`Pizza added to the cart`);
    this.msg.sendMsg(pizza);

  }

}
