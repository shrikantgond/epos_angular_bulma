import { Observable, of, pipe, throwError, interval } from 'rxjs';
import { IChartModel, DefaultChart, DefaultOrderChart, DefaultPaymentChart } from 'src/app/models/chart.model';
import { catchError, delay, map, switchMap, mergeMap } from 'rxjs/operators';

export function mockOrderChartApiResponse(): Observable<IChartModel> {
    return of({    
      ...DefaultOrderChart(),      
      xAxis: { categories: ['10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
        title: { text: null } },      
      series: [{name: 'Orders', data: [Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random()), 
        Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random()), 
        Math.floor(50*Math.random()), Math.floor(50*Math.random())]}]
  })
    .pipe(
      delay(1000)
    )
  // return new Observable<IChartModel>(
  //   observer => {
  //     const canCreate = null; // this is just null for now, will some value later
  //     if (canCreate == null) {
  //       setTimeout(() => {
  //         observer.error(new Error('This is an error'));
  //       }, 1000);                
  //     } else {
  //       observer.next();
  //     }
  //     setTimeout(() => {
  //       observer.complete();
  //     }, 1500);    
  //   }
  // )
  //   .pipe(
  //     delay(100)
  //   )

}

export function mockPaymentChartApiResponse(): Observable<IChartModel> {
  return of({
    ...DefaultPaymentChart(),
    xAxis: {
      categories: ['10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
      title: { text: null }
    },
    yAxis: { min: 0, title: { text: 'Price' }, labels: { overflow: 'justify' } },
    series: [{
      name: 'Sales', data: [Math.floor(1000 * Math.random()), Math.floor(1000 * Math.random()),
      Math.floor(1000 * Math.random()), Math.floor(1000 * Math.random()), Math.floor(1000 * Math.random()), Math.floor(1000 * Math.random()),
      Math.floor(1000 * Math.random()), Math.floor(1000 * Math.random()), Math.floor(1000 * Math.random()), Math.floor(1000 * Math.random())]
    }]
  })
    .pipe(
      delay(1000)
    )
  //return throwError(new Error('This is custom error'));
}

export function mockPaymentSummaryChartApiResponse(): Observable<IChartModel> {
  return of({
    ...DefaultPaymentChart(),
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
  })
    .pipe(
      delay(1000)
    )
  //return throwError(new Error('This is custom error'));
}