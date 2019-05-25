import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IInventoryModel } from '../models/inventory.model';


export function mockInventoryApiResponse(): Observable<IInventoryModel[]> {
  return of([{
    title:'Tea Powder',   
    type:'Ingredient',
    category:'string',     
    quantity:Math.floor(80 * Math.random()),
    expiry:Date.now(),
    isactionable: false
},
{
    title:'Tea Powder',   
    type:'Ingredient',
    category:'string',     
    quantity:Math.floor(80 * Math.random()),
    expiry:Date.now(),
    isactionable: false
},
{
    title:'Tea Powder',   
    type:'Ingredient',
    category:'string',     
    quantity:Math.floor(80 * Math.random()),
    expiry:Date.now(),
    isactionable: false
},
{
    title:'Tea Powder',   
    type:'Ingredient',
    category:'string',     
    quantity:Math.floor(80 * Math.random()),
    expiry:Date.now(),
    isactionable: false
},
{
    title:'Tea Powder',   
    type:'Ingredient',
    category:'string',     
    quantity:Math.floor(80 * Math.random()),
    expiry:Date.now(),
    isactionable: false
},
{
    title:'Tea Powder',   
    type:'Ingredient',
    category:'string',     
    quantity:Math.floor(80 * Math.random()),
    expiry:Date.now(),
    isactionable: false
},
])
    .pipe(
      delay(1000)
    )
}