import {Observable, of, pipe, throwError} from 'rxjs';
import { IOrderChartModel } from 'src/app/models/order-chart.model';
import {catchError, delay, map, switchMap} from 'rxjs/operators';

export function mockOrderChartApiResponse(): Observable<IOrderChartModel> {
    return of({    
      chart: { type: 'column' },
      title: { text: null },
      xAxis: { categories: ['10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
        title: { text: null } },
      yAxis: { min: 0, title: { text: 'Orders'}, labels: { overflow: 'justify' } },
      tooltip: { valueSuffix: ' Orders' },
      plotOptions: { bar: { dataLabels: { enabled: true } } },
      credits: {enabled: false},
      series: [{name: 'Orders', data: [50*Math.random(), 50*Math.random(), 50*Math.random(), 50*Math.random(), 
        50*Math.random(), 50*Math.random(), 50*Math.random(), 50*Math.random(), 50*Math.random(), 50*Math.random()]}]
  })
    .pipe(
      delay(1000)
    )
    //return throwError(new Error('This is custom error'));
  }

  export function mockPaymentChartApiResponse(): Observable<IOrderChartModel> {
    return of({    
      chart: { type: 'column' },
      title: { text: null },
      xAxis: { categories: ['10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
        title: { text: null } },
      yAxis: { min: 0, title: { text: 'Price'}, labels: { overflow: 'justify' } },
      tooltip: { valueSuffix: ' Rupees' },
      plotOptions: { bar: { dataLabels: { enabled: true } } },
      credits: {enabled: false},
      series: [{name: 'Sales', data: [1000*Math.random(), 1000*Math.random(), 1000*Math.random(), 1000*Math.random(), 2, 133, 156, 947, 408, 6]}]
  })
    .pipe(
      delay(1000)
    )
    //return throwError(new Error('This is custom error'));
  }