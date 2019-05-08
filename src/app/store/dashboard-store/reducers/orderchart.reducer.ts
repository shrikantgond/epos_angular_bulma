import { OrderChartState, DefaultOrderChartState } from '../states/orderchart.state';
import { OrderChartActions, OrderChartActionsTypes } from '../actions/orderchart.actions';
import * as app from '../../application.state';

export function OrderChartReducer(state: OrderChartState = DefaultOrderChartState(), action: OrderChartActions): OrderChartState {
    //console.log('Action '+action.type)
    switch (action.type) {

        case OrderChartActionsTypes.Load:
            return {
                ...state,
                ...app.LoadingApplicationState(),
            }
        case OrderChartActionsTypes.LoadSuccess:
            return {
                ...state,
                ...app.LoadedApplicationState(),
            }
          case OrderChartActionsTypes.LoadError:          
            return {
              ...state,
              ...app.ErrorApplicationState(action.error),
            };
        //   case actions.OrderChartActionsTypes.LoadSuccess:
        //     return {
        //       ...state,
        //       ...app.LoadedApplicationState(),
        //       orderchart: action.payload.orderchart,
        //     };
        //   case actions.PaymentChartActionsTypes.LoadSuccess:
        //     return {
        //       ...state,
        //       ...app.LoadedApplicationState(),
        //       paymentchart: action.payload.paymentchart,
        //     };
        //   case actions.PaymentSummaryChartActionsTypes.LoadSuccess:
        //     return {
        //       ...state,
        //       ...app.LoadedApplicationState(),
        //       paymentsummarychart: action.payload.paymentsummarychart,
        //     };
        default:
            return state;
    }
}