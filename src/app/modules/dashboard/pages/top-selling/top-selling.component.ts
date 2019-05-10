import { Component, OnInit } from '@angular/core';
import { ApplicationState } from 'src/app/store/application.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadTopSelling } from 'src/app/store/dashboard-store/actions/topselling.actions';
import { ITopSellingModel } from 'src/app/models/topselling.model';
import { TopSellingState } from 'src/app/store/dashboard-store/states/topselling.state';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.scss']
})
export class TopSellingComponent implements OnInit {

  topselling$: Observable<TopSellingState>;

  constructor(private store: Store<ApplicationState>) {     
    this.topselling$ = this.store.select<TopSellingState>((state: any) => state['topselling']);
    this.load();
    // this.store.select<TopSellingState>((state: any) => state['topselling'])
    // .subscribe((chart: any) => { console.log('ad'); console.log(chart); }); 

  }

  load() {
    const action = new LoadTopSelling();    
      this.store.dispatch(action); 
  }

  ngOnInit() {
  }

}
