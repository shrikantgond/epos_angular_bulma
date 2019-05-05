import {createDefaultLoadable, Loadable} from '../loadable/loadable';
import {DashboardActionsUnion, DashboardActionsTypes} from './dashboard-store.actions';
import {withLoadable} from '../loadable/with-loadable';
import { IChartModel } from 'src/app/models/order-chart.model';

export interface Dashboard extends Loadable {
  entities: IChartModel;
}

export function createDefaultDashboard(): Dashboard {
  return {
    ...createDefaultLoadable(),
    entities: { 
      chart: { type: 'column' },
      title: { text: 'Payment Chart' },
      xAxis: { categories: ['10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
        title: { text: null } },
      yAxis: { min: 0, title: { text: 'Price'}, labels: { overflow: 'justify' } },
      tooltip: { valueSuffix: ' Rupees' },
      plotOptions: { bar: { dataLabels: { enabled: true } } },
      credits: {enabled: false},
      series: [{name: 'Sales', data: [107, 31, 635, 203, 2, 133, 156, 947, 408, 6]}]
    }
  };
}

function baseDashboardReducer(state: Dashboard = createDefaultDashboard(), action: DashboardActionsUnion): Dashboard {
  switch (action.type) {
    case DashboardActionsTypes.LoadSuccess:
      return {
        ...state,
        entities: action.payload.entities
      };
    default:
      return state;
  }
}

export function DashboardReducer(state: Dashboard, action: DashboardActionsUnion): Dashboard {
  return withLoadable(baseDashboardReducer, {
    loadingActionType: DashboardActionsTypes.Load,
    successActionType: DashboardActionsTypes.LoadSuccess,
    errorActionType: DashboardActionsTypes.LoadError,
  })(state, action);
}
