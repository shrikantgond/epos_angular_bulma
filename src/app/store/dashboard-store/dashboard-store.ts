import * as actions from './dashboard-store.actions';
import * as orderchartstate from './states/orderchart.state'
import { OrderChartReducer } from './reducers/orderchart.reducer';

export type DashboardState = {
  orderchart: orderchartstate.OrderChartState;
  //paymentchart: chart_model.IChartModel;
  //paymentsummarychart: chart_model.IChartModel;
}

export function DefaultDashboardState(): DashboardState {
  return {    
    orderchart: orderchartstate.DefaultOrderChartState(),
    //paymentchart: chart_model.DefaultPaymentChart(),
    //paymentsummarychart: chart_model.DefaultPaymentSummaryChart(),
  };
}

export function DashboardReducer(state: DashboardState = DefaultDashboardState(), action: actions.DashboardActions): DashboardState {
  //console.log('Action '+action.type)
  switch (action.type) {

    case actions.OrderChartActionsTypes.Load:
    case actions.OrderChartActionsTypes.LoadSuccess:
    case actions.OrderChartActionsTypes.LoadError:
      return {
        ...state,
        orderchart: OrderChartReducer(state.orderchart,action),
      }      

    // case actions.OrderChartActionsTypes.LoadError:
    // //case actions.PaymentChartActionsTypes.LoadError:
    // //case actions.PaymentSummaryChartActionsTypes.LoadError:
    //   return {
    //     ...state,
    //     ...app.ErrorApplicationState(action.error),
    //   };
    // case actions.OrderChartActionsTypes.LoadSuccess:
    //   return {
    //     ...state,
    //     ...app.LoadedApplicationState(),
    //     orderchart: action.payload.orderchart,
    //   };
    // case actions.PaymentChartActionsTypes.LoadSuccess:
    //   return {
    //     ...state,
    //     ...app.LoadedApplicationState(),
    //     paymentchart: action.payload.paymentchart,
    //   };
    // case actions.PaymentSummaryChartActionsTypes.LoadSuccess:
    //   return {
    //     ...state,
    //     ...app.LoadedApplicationState(),
    //     paymentsummarychart: action.payload.paymentsummarychart,
    //   };
    default:
      return state;
  }
}



