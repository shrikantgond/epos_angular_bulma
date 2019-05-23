import { OrderState, DefaultOrderState } from '../states/order.state';
import { OrderActions, OrderActionsTypes } from '../actions/order.actions';
import * as app from '../../application.state';
import { IOrderItemModel, IOrderModel } from 'src/app/models/order.model';

export function OrderReducer(state: OrderState = DefaultOrderState(), action: OrderActions): OrderState {
    //console.log('Action '+action.type)
    switch (action.type) {

        case OrderActionsTypes.Load:
            return {
                ...state,
                ...app.LoadingApplicationState(),
            }
            case OrderActionsTypes.Save:
                    console.log('orders'); console.log(state.orders);
                    //console.log(state.orders.concat(action.payload.order).unique()); 
                    const orderindex = state.orders.findIndex(o => o.tablecode && o.tablecode === action.payload.tablecode);
                    console.log('order ');  console.log(orderindex);
                    if (orderindex > -1) {
                        state.orders.map(order => {
                            console.log('order before'); console.log(order);
                            if (order.tablecode && order.tablecode === action.payload.tablecode) {
                                console.log('order before 2'); console.log(order);                                                        
                                if (order.items && order.items.length >0) {
                                    const itemindex = order.items.findIndex(i => i.menutitle === action.payload.menuitem.menutitle);
                                    switch (action.payload.actiontype) {
                                        case 'ADD':
                                                if(itemindex > -1){ order.items[itemindex].quantity++; }
                                                else{ order.items.push(action.payload.menuitem);}                                            
                                            break;                                    
                                        default:
                                            break;
                                    }
                                    
                                } else {
                                    order.items.push(action.payload.menuitem);
                                }
                                console.log('order after'); console.log(order);
                            }
                        });
                        console.log(state.orders);
                    } else {
                        const neworder: IOrderModel ={
                            tablecode: action.payload.tablecode,
                            items: [action.payload.menuitem]
                        }
                        state.orders = state.orders.concat(neworder);
                        console.log(state.orders);
                    }
                    
            return {
                ...state,     
                //...state.orders = 
                // ...state.orders.map(order => {
                //     console.log('order before'); console.log(order);
                //     if (order.tablecode && order.tablecode === action.payload.order.tablecode) {
                //         console.log('order before'); console.log(order);
                //         order.items.concat(action.payload.order.items); 
                //         console.log('order before'); console.log(order);
                //     }
                // }),
                ...app.LoadedApplicationState(),
            }
        case OrderActionsTypes.LoadSuccess:        
            return {
                ...state,
                //orders:[...state.orders, action.payload.orders]
                orders: action.payload.orders,
                ...app.LoadedApplicationState(),
            }
          case OrderActionsTypes.LoadError:          
            return {
              ...state,
              ...app.ErrorApplicationState(action.error),
            };
        default:
            return state;
    }
}