import { stringify } from '@angular/core/src/render3/util';

export interface IInventoryModel{
    title:string;
    type:string;
    category:string;
    quantity:number;
    expiry: number;
    orderquantity?:number;    
    isactionable: boolean;
    actionlink?: string;
  }

  export function DefaultInventorys(): IInventoryModel[] {
    return [{
        title:'Tea Powder',   
        type:'Ingredient',
        category:'string',     
        quantity:57,
        expiry:Date.now(),
        isactionable: false
    },
    {
        title:'Tea Powder',   
        type:'Ingredient',
        category:'string',     
        quantity:57,
        expiry:Date.now(),
        isactionable: false
    },
    {
        title:'Tea Powder',   
        type:'Ingredient',
        category:'string',     
        quantity:57,
        expiry:Date.now(),
        isactionable: false
    },
    {
        title:'Tea Powder',   
        type:'Ingredient',
        category:'string',     
        quantity:57,
        expiry:Date.now(),
        isactionable: false
    },
    {
        title:'Tea Powder',   
        type:'Ingredient',
        category:'string',     
        quantity:57,
        expiry:Date.now(),
        isactionable: false
    },
    {
        title:'Tea Powder',   
        type:'Ingredient',
        category:'string',     
        quantity:57,
        expiry:Date.now(),
        isactionable: false
    },
]
}