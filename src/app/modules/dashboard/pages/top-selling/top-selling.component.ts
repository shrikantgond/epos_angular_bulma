import { Component, OnInit } from '@angular/core';
import { ApplicationState } from 'src/app/store/application.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadTopSelling } from 'src/app/store/dashboard-store/actions/topselling.actions';
import { ITopSellingModel } from 'src/app/models/topselling.model';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.scss']
})
export class TopSellingComponent implements OnInit {

  topselling$: Observable<ITopSellingModel[]>;

  constructor(private store: Store<ApplicationState>) {     
    this.topselling$ = this.store.select<ITopSellingModel[]>((state: any) => state['topselling'].topselling);
    this.load();
   /*  this.store.select<ITopSellingModel[]>((state: any) => state)
    .subscribe((chart: any) => { console.log('ad'); console.log(chart); }); */

  }

  load() {
    const action = new LoadTopSelling();    
      this.store.dispatch(action); 
  }

  ngOnInit() {
  }

}
