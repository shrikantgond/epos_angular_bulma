import { OrderChartState, DefaultOrderChartState } from '../states/orderchart.state';
import { OrderChartActions, OrderChartActionsTypes } from '../actions/orderchart.actions';
import * as app from '../../application.state';

export function OrderChartReducer(state: OrderChartState = DefaultOrderChartState(), action: OrderChartActions): OrderChartState {
    switch (action.type) {

        case OrderChartActionsTypes.Load:
            return {
                ...state,
                ...app.LoadingApplicationState(),
            }
        case OrderChartActionsTypes.LoadSuccess:
            return {
                ...state,
                chartdata: action.payload.orderchart,
                ...app.LoadedApplicationState(),
            }
          case OrderChartActionsTypes.LoadError:          
            return {
              ...state,
              ...app.ErrorApplicationState(action.error),
            };
        default:
            return state;
    }
}