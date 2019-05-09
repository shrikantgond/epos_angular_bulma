import * as chart_model from 'src/app/models/chart.model';
import * as app from '../../application.state';

export interface OrderStatusChartState extends app.ApplicationState {
    chartdata: chart_model.IChartModel
}

export function DefaultOrderStatusChartState(): OrderStatusChartState {
    return {
        ...app.DefaultApplicationState(),
        chartdata: chart_model.DefaultOrderStatusChart()
    };
}