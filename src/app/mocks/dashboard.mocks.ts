import { Observable, of, pipe, throwError, interval } from 'rxjs';
import { IOrderChartModel, DefaultChart, DefaultOrderChart, DefaultPaymentChart } from 'src/app/models/order-chart.model';
import { catchError, delay, map, switchMap, mergeMap } from 'rxjs/operators';

export function mockOrderChartApiResponse(): Observable<IOrderChartModel> {
  //   return of({    
  //     ...DefaultOrderChart(),      
  //     xAxis: { categories: ['10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
  //       title: { text: null } },      
  //     series: [{name: 'Orders', data: [Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random()), 
  //       Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random()), Math.floor(50*Math.random()), 
  //       Math.floor(50*Math.random()), Math.floor(50*Math.random())]}]
  // })
  //   .pipe(
  //     delay(100)
  //   )
  return new Observable<IOrderChartModel>(
    observer => {
      const canCreate = null; // this is just null for now, will some value later
      if (canCreate == null) {
        setTimeout(() => {
          observer.error(new Error('This is an error'));
        }, 1000);                
      } else {
        observer.next();
      }
      setTimeout(() => {
        observer.complete();
      }, 1500);    
    }
  )
    .pipe(
      delay(100)
    )

}

export function mockPaymentChartApiResponse(): Observable<IOrderChartModel> {
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