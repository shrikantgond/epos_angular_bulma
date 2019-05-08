import * as chart_model from 'src/app/models/chart.model';
import * as app from '../../application.state';

export interface PaymentSummaryChartState extends app.ApplicationState{
    chartdata: chart_model.IChartModel
}

export function DefaultPaymentSummaryChartState(): PaymentSummaryChartState {
    return {
        ...app.DefaultApplicationState(),
        chartdata: chart_model.DefaultPaymentSummaryChart()
    };
}