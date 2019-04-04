import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleStatusChartComponent } from './sale-status-chart.component';

describe('SaleStatusChartComponent', () => {
  let component: SaleStatusChartComponent;
  let fixture: ComponentFixture<SaleStatusChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleStatusChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleStatusChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
