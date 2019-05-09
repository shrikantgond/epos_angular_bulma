import { OrderStatusChartState, DefaultOrderStatusChartState } from '../states/orderstatuschart.state';
import { OrderStatusChartActions, OrderStatusChartActionsTypes } from '../actions/orderstatuschart.actions';
import * as app from '../../application.state';

export function OrderStatusChartReducer(state: OrderStatusChartState = DefaultOrderStatusChartState(), action: OrderStatusChartActions): OrderStatusChartState {
    switch (action.type) {

        case OrderStatusChartActionsTypes.Load:
            return {
                ...state,
                ...app.LoadingApplicationState(),
            }
        case OrderStatusChartActionsTypes.LoadSuccess:
            return {
                ...state,
                chartdata: action.payload.orderstatuschart,
                ...app.LoadedApplicationState(),
            }
          case OrderStatusChartActionsTypes.LoadError:          
            return {
              ...state,
              ...app.ErrorApplicationState(action.error),
            };
        default:
            return state;
    }
}