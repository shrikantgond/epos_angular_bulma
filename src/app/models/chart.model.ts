export interface IChartModel {
    chart: IChartType;
    title: ITitle;
    xAxis: IXAxis;
    yAxis: IYAxis;
    tooltip: Itooltip;
    plotOptions: IPlotOptions;
    credits: IEnabled;
    series: ISeries[];
}

export interface IChartType {
    type: string;
}
export interface ITitle {
    text: string;
}
export interface IXAxis {
    categories: string[];
    title: ITitle;
}
export interface IYAxis {
    min: number;
    title: ITitle;
    labels: IOverflow;
}
export interface IOverflow {
    overflow: string;
}
export interface Itooltip {
    valueSuffix: string;
}
export interface IPlotOptions {
    bar: IBarOption;
}
export interface IBarOption {
    dataLabels: IEnabled;
}
export interface IEnabled {
    enabled: boolean;
}
export interface ISeries {
    name: string;
    data: number[];
}

export function DefaultChart(): IChartModel {
    return {
        chart: { type: 'column' },
        title: { text: 'Title' },
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

export function DefaultOrderChart(): IChartModel {
    return {
        ...DefaultChart(),
        title: { text: null },
        xAxis: {
            categories: ['10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
            title: { text: null }
        },
        yAxis: { min: 0, title: { text: 'Orders' }, labels: { overflow: 'justify' } },
        tooltip: { valueSuffix: ' Orders' },
        series: [{ name: 'Orders', data: [107, 31, 635, 203, 2, 133, 156, 947, 408, 6] }]
    };
}

export function DefaultPaymentChart(): IChartModel {
    return {
        ...DefaultChart(),
        title: { text: null },
        xAxis: {
            categories: ['10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
            title: { text: null }
        },
        yAxis: { min: 0, title: { text: 'Price' }, labels: { overflow: 'justify' } },
        tooltip: { valueSuffix: ' Rupees' },
        series: [{ name: 'Sales', data: [107, 31, 635, 203, 2, 133, 156, 947, 408, 6] }]
    };
}

export function DefaultPaymentSummaryChart(): IChartModel {
    return {
        ...DefaultChart(),
        chart: {
            type: 'bar'
          },
          title: {
            text: 'Payment Summery Chart'
          },
          xAxis: {
            categories: ['Cash', 'Card', 'Wallet', 'Credit'],
            title: { text: null }
          },
          yAxis: { min: 0, title: { text: 'Price' }, labels: { overflow: 'justify' } },
          series: [{
            name: 'Sales',
            data: [107, 31, 635, 203]
          }]
    };
}