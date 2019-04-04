import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSummeryChartComponent } from './payment-summery-chart.component';

describe('PaymentSummeryChartComponent', () => {
  let component: PaymentSummeryChartComponent;
  let fixture: ComponentFixture<PaymentSummeryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentSummeryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSummeryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
