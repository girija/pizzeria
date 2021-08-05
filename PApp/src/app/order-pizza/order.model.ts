export interface Pizza{
    id:number,
    type:string,
    price:number,
    name:string,
    image:string,
    description:string,
    ingredients:Array<string>,
    topping:Array<string>
}