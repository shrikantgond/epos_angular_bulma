import * as chart_model from 'src/app/models/chart.model';
import * as app from '../../application.state';

export interface OrderChartState extends app.ApplicationState {
    chartdata: chart_model.IChartModel
}

export function DefaultOrderChartState(): OrderChartState {
    return {
        ...app.DefaultApplicationState(),
        chartdata: chart_model.DefaultOrderChart()
    };
}