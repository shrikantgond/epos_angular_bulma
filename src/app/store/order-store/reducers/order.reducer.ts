import { OrderState, DefaultOrderState } from '../states/order.state';
import { OrderActions, OrderActionsTypes } from '../actions/order.actions';
import * as app from '../../application.state';

export function OrderReducer(state: OrderState = DefaultOrderState(), action: OrderActions): OrderState {
    //console.log('Action '+action.type)
    switch (action.type) {

        case OrderActionsTypes.Load:
            return {
                ...state,
                ...app.LoadingApplicationState(),
            }
            case OrderActionsTypes.Save:
            return {
                ...state,
                //orders: action.payload.orders,
                orders: [...state.orders, action.payload.order],
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