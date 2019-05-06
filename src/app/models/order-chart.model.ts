export interface IOrderChartModel {    
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
