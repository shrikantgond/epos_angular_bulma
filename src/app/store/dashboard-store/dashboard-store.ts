import { DashboardActionsUnion, OrderChartActionsTypes, PaymentChartActionsTypes } from './dashboard-store.actions';
import { IOrderChartModel, DefaultOrderChart, DefaultPaymentChart } from 'src/app/models/order-chart.model';
import * as app from '../application.state';

export interface Dashboard extends app.ApplicationState {
  orderchart: IOrderChartModel;
  paymentchart: IOrderChartModel;
}

export function DefaultDashboard(): Dashboard {
  return {
    ...app.DefaultApplicationState(),
    orderchart: DefaultOrderChart(),
    paymentchart: DefaultPaymentChart(),
  };
}

export function DashboardReducer(state: Dashboard = DefaultDashboard(), action: DashboardActionsUnion): Dashboard {
  //console.log('Action '+action.type)
  switch (action.type) {

    case OrderChartActionsTypes.Load:      
    case PaymentChartActionsTypes.Load:      
      return {
        ...state,
        ...app.LoadingApplicationState(),        
      }
    case OrderChartActionsTypes.LoadError:
    case PaymentChartActionsTypes.LoadError:
      return {
        ...state,
        ...app.ErrorApplicationState(action.error),
      };
    case OrderChartActionsTypes.LoadSuccess:
      return {
        ...state,
        ...app.LoadedApplicationState(),
        orderchart: action.payload.orderchart,        
      };
    case PaymentChartActionsTypes.LoadSuccess:
      return {
        ...state,
        ...app.LoadedApplicationState(),
        paymentchart: action.payload.paymentchart,        
      };
    default:
      return state;
  }
}



