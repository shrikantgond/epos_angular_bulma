import { PaymentSummaryChartState, DefaultPaymentSummaryChartState } from '../states/paymentsummarychart.state';
import { PaymentSummaryChartActions, PaymentSummaryChartActionsTypes } from '../actions/paymentsummarychart.actions';
import * as app from '../../application.state';

export function PaymentSummaryChartReducer(state: PaymentSummaryChartState = DefaultPaymentSummaryChartState(), action: PaymentSummaryChartActions): PaymentSummaryChartState {
    //console.log('Action '+action.type)
    switch (action.type) {

        case PaymentSummaryChartActionsTypes.Load:
            return {
                ...state,
                ...app.LoadingApplicationState(),
            }
        case PaymentSummaryChartActionsTypes.LoadSuccess:
            return {
                ...state,
                ...app.LoadedApplicationState(),
            }
          case PaymentSummaryChartActionsTypes.LoadError:          
            return {
              ...state,
              ...app.ErrorApplicationState(action.error),
            };
        //   case actions.PaymentSummaryChartActionsTypes.LoadSuccess:
        //     return {
        //       ...state,
        //       ...app.LoadedApplicationState(),
        //       PaymentSummarychart: action.payload.PaymentSummarychart,
        //     };
        //   case actions.PaymentSummaryChartActionsTypes.LoadSuccess:
        //     return {
        //       ...state,
        //       ...app.LoadedApplicationState(),
        //       PaymentSummarychart: action.payload.PaymentSummarychart,
        //     };
        //   case actions.PaymentSummarySummaryChartActionsTypes.LoadSuccess:
        //     return {
        //       ...state,
        //       ...app.LoadedApplicationState(),
        //       PaymentSummarysummarychart: action.payload.PaymentSummarysummarychart,
        //     };
        default:
            return state;
    }
}