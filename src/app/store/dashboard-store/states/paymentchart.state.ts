import * as chart_model from 'src/app/models/chart.model';
import * as app from '../../application.state';

export interface PaymentChartState extends app.ApplicationState {
    chartdata: chart_model.IChartModel
}

export function DefaultPaymentChartState(): PaymentChartState {
    return {
        ...app.DefaultApplicationState(),
        chartdata: chart_model.DefaultPaymentChart()
    };
}