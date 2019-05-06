import { createDefaultLoadable, Loadable, onLoadableLoad, } from '../loadable/loadable';
import { DashboardActionsUnion, OrderChartActionsTypes, PaymentChartActionsTypes } from './dashboard-store.actions';
import { withLoadable } from '../loadable/with-loadable';
import { IOrderChartModel } from 'src/app/models/order-chart.model';

export interface Dashboard extends Loadable {
  orderchart: IOrderChartModel;
  paymentchart: IOrderChartModel;
}

export function createDefaultDashboard(): Dashboard {
  return {
    ...createDefaultLoadable(),
    orderchart: createDefaultOrderChart(),
    paymentchart: createDefaultPaymentChart(),
  };
}

export function DashboardReducer(state: Dashboard = createDefaultDashboard(), action: DashboardActionsUnion): Dashboard {
  //console.log('Action '+action.type)
  switch (action.type) {

    case OrderChartActionsTypes.Load:      
    case PaymentChartActionsTypes.Load:      
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      }
    case OrderChartActionsTypes.LoadError:
    case PaymentChartActionsTypes.LoadError:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error,
      };
    case OrderChartActionsTypes.LoadSuccess:
      return {
        ...state,
        orderchart: action.payload.orderchart,
        loading: false,
        success: true,
        error: null,
      };
    case PaymentChartActionsTypes.LoadSuccess:
      return {
        ...state,
        paymentchart: action.payload.paymentchart,
        loading: false,
        success: true,
        error: null,
      };
    default:
      return state;
  }
}

// export function DashboardReducer(state: Dashboard, action: DashboardActionsUnion): Dashboard {
//   return withLoadable(baseDashboardReducer, {
//     loadingActionType: OrderChartActionsTypes.Load,
//     successActionType: OrderChartActionsTypes.LoadSuccess,
//     errorActionType: OrderChartActionsTypes.LoadError,
//   })(state, action);
// }



function createDefaultOrderChart(): IOrderChartModel {
  return {
    chart: { type: 'column' },
    title: { text: null },
    xAxis: {
      categories: ['10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
      title: { text: null }
    },
    yAxis: { min: 0, title: { text: 'Price' }, labels: { overflow: 'justify' } },
    tooltip: { valueSuffix: ' Rupees' },
    plotOptions: { bar: { dataLabels: { enabled: true } } },
    credits: { enabled: false },
    series: [{ name: 'Sales', data: [107, 31, 635, 203, 2, 133, 156, 947, 408, 6] }]

  };
}

function createDefaultPaymentChart(): IOrderChartModel {
  return {
    chart: { type: 'column' },
    title: { text: null },
    xAxis: {
      categories: ['10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
      title: { text: null }
    },
    yAxis: { min: 0, title: { text: 'Price' }, labels: { overflow: 'justify' } },
    tooltip: { valueSuffix: ' Rupees' },
    plotOptions: { bar: { dataLabels: { enabled: true } } },
    credits: { enabled: false },
    series: [{ name: 'Sales', data: [107, 31, 635, 203, 2, 133, 156, 947, 408, 6] }]

  };
}
