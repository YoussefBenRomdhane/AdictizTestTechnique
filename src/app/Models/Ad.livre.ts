import { Item } from "./Ad.item";

export class Livre{
    
    constructor( public kind?:string, 
         public totalItems?:string, 
         public items?:Array<Item>

        ){}              
}

