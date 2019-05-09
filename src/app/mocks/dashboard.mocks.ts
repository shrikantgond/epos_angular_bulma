import { Observable, of, pipe, throwError, interval } from 'rxjs';
import { IChartModel, DefaultChart, DefaultOrderChart, DefaultPaymentChart } from 'src/app/models/chart.model';
import { ITileModel, DefaultTiles } from 'src/app/models/tile.model'
import { catchError, delay, map, switchMap, mergeMap } from 'rxjs/operators';
import { ITopSellingModel } from '../models/topselling.model';

export function mockOrderChartApiResponse(): Observable<IChartModel> {
  return of({
    ...DefaultOrderChart(),
    xAxis: {
      categories: ['10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
      title: { text: null }
    },
    series: [{
      name: 'Orders', data: [Math.floor(50 * Math.random()), Math.floor(50 * Math.random()), Math.floor(50 * Math.random()), Math.floor(50 * Math.random()),
      Math.floor(50 * Math.random()), Math.floor(50 * Math.random()), Math.floor(50 * Math.random()), Math.floor(50 * Math.random()),
      Math.floor(50 * Math.random()), Math.floor(50 * Math.random())]
    }]
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
      data: [Math.floor(1000 * Math.random()), Math.floor(1000 * Math.random()),
      Math.floor(1000 * Math.random()), Math.floor(1000 * Math.random())]
    }]
  })
    .pipe(
      delay(1000)
    )
}

export function mockOrderStatusChartApiResponse(): Observable<IChartModel> {
  return of({
    ...DefaultPaymentChart(),
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Order Status Chart'
    },
    xAxis: {
      categories: ['Table', 'Take Away', 'Online', 'Third Party', 'Corporate'],
      title: { text: null }
    },
    yAxis: { min: 0, title: { text: 'Price' }, labels: { overflow: 'justify' } },
    series: [{
      name: 'Sales',
      data: [Math.floor(1000 * Math.random()), Math.floor(1000 * Math.random()),
      Math.floor(1000 * Math.random()), Math.floor(1000 * Math.random()), Math.floor(1000 * Math.random())]
    }]
  })
    .pipe(
      delay(1000)
    )
}


export function mockTileApiResponse(): Observable<ITileModel[]> {
  return of([{
    title: 'TOTAL ORDERS',
    count: Math.floor(50 * Math.random()).toString(),
    change: Math.floor(50 * Math.random()),
    link: '#'
  },
  {
    title: 'TOTAL CUSTOMERS',
    count: Math.floor(50 * Math.random()).toString(),
    change: Math.floor(50 * Math.random()),
    link: '#'
  },
  {
    title: 'TOTAL SALE',
    count: Math.floor(50 * Math.random()).toString(),
    change: Math.floor(50 * Math.random()),
    link: '#'
  },
  {
    title: 'TOP SELLING',
    count: 'Tea, Coffee...',
    change: 0,
    link: '#'
  }])
    .pipe(
      delay(1000)
    )
}

export function mockTopSellingApiResponse(): Observable<ITopSellingModel[]> {
  return of([{
    title: 'Masala Chai',
    quantity: Math.floor(20 * Math.random()),
  },
  {
    title: 'Tripple Schewan Fried Rice',
    quantity: Math.floor(50 * Math.random()),
  },
  {
    title: 'Special Masala Dosa',
    quantity: Math.floor(50 * Math.random()),
  },
  {
    title: 'Onion Uttapa',
    quantity: Math.floor(50 * Math.random()),
  },
  {
    title: 'Maggie',
    quantity: Math.floor(25 * Math.random()),
  }
  ])
    .pipe(
      delay(1000)
    )
}