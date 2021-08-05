import { Component, OnInit } from '@angular/core';
import { WebRequestService } from '../web-request.service';
import { Ingredients } from './build.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-build-ur-pizza',
  templateUrl: './build-ur-pizza.component.html',
  styleUrls: ['./build-ur-pizza.component.css']
})
export class BuildUrPizzaComponent implements OnInit {
  ingredients:Ingredients[]=[];
  total:any=0;
  pizzaForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    type: new FormControl('', [Validators.required]),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    ingredients: new FormControl('', Validators.required),
    topping: new FormControl('')
  });
  constructor(private webrequest:WebRequestService) { }

  ngOnInit(): void {
    this.webrequest.get('buildUrPizza').subscribe((response:any)=>{
      this.ingredients=response.ingredients;
    })
  }
  calculate(t:any,id:any):void{
    var element = <HTMLInputElement> document.getElementById(id);
    // console.log(element);
    if(element.checked){
      this.total= this.total+t.price;
    }
    else{
      this.total=this.total-t.price;
    }
  }
  get f(){
    return this.pizzaForm.controls;
  }
  
  submit(){
    console.log(this.pizzaForm.value);
  }
}
