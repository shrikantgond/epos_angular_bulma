import { ICustomerModel } from './customer.model';

export interface IOrderModel {
    tablecode?: number;
    items?: IOrderItemModel[];
    customer?: ICustomerModel
}

//orders object

let orders: IOrderModel[] = [];

export function GetOrders(): IOrderModel[] {
    return orders;
}
export function AddOrder(order: IOrderModel): boolean{
    console.log('added : ');
    
    orders = orders.concat(order);
    console.log(orders);
    return true;
}
export function UpdateOrder(order: IOrderModel): boolean{
    DeleteOrder(order.tablecode);
    return AddOrder(order);
}
export function DeleteOrder(tablecode: number): void{
    orders = orders.filter(o=>o.tablecode !== tablecode);
    if(orders){
        console.log('deleted : '+ tablecode);
        console.log(orders);
    }
}

export interface IOrderItemModel {
    menutitle: string;
    menurate: number;
    quantity: number;
    kot: number;
}