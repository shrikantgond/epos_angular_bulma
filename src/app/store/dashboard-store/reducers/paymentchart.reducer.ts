import { PaymentChartState, DefaultPaymentChartState } from '../states/paymentchart.state';
import { PaymentChartActions, PaymentChartActionsTypes } from '../actions/paymentchart.actions';
import * as app from '../../application.state';

export function PaymentChartReducer(state: PaymentChartState = DefaultPaymentChartState(), action: PaymentChartActions): PaymentChartState {
    //console.log('Action '+action.type)
    switch (action.type) {

        case PaymentChartActionsTypes.Load:
            return {
                ...state,
                ...app.LoadingApplicationState(),
            }
        case PaymentChartActionsTypes.LoadSuccess:
            return {
                ...state,
                chartdata: action.payload.paymentchart,
                ...app.LoadedApplicationState(),
            }
          case PaymentChartActionsTypes.LoadError:          
            return {
              ...state,
              ...app.ErrorApplicationState(action.error),
            };
        //   case actions.PaymentChartActionsTypes.LoadSuccess:
        //     return {
        //       ...state,
        //       ...app.LoadedApplicationState(),
        //       Paymentchart: action.payload.Paymentchart,
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