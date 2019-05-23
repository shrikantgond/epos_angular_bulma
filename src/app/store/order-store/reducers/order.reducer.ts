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
            const orderindex = state.orders.findIndex(o => o.tablecode && o.tablecode === action.payload.tablecode);
            if (orderindex > -1) {
                let itemindex = -1;
                if (state.orders[orderindex].items && state.orders[orderindex].items.length > 0) {
                    itemindex = state.orders[orderindex].items.findIndex(i => i.menutitle === action.payload.menuitem.menutitle);
                }

                switch (action.payload.actiontype) {
                    case 'ADD':
                        if (itemindex > -1) {
                            state.orders[orderindex].items[itemindex].quantity++;
                        }
                        else {
                            state.orders[orderindex].items.push(action.payload.menuitem);
                        }
                        break;
                    case 'UPDATE':
                        if (itemindex > -1) {
                            state.orders[orderindex].items[itemindex] = action.payload.menuitem;
                        }
                        break;
                    case 'DELETE':
                        if (itemindex > -1) {
                            console.log('wtf');
                            console.log(state.orders[orderindex].items.filter(item =>
                                item.menutitle !== action.payload.menuitem.menutitle
                            ));
                            state.orders[orderindex].items = state.orders[orderindex].items.filter(item =>
                                item.menutitle !== action.payload.menuitem.menutitle);
                            console.log(state.orders);
                        }
                        break;
                    default:
                        break;
                }

            } else { // if order not found add it dont check actiontype
                const neworder: IOrderModel = { tablecode: action.payload.tablecode, items: [action.payload.menuitem] }
                state.orders = state.orders.concat(neworder);
            }

            return {
                ...state,
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