import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTopOrdersComponent } from './customer-top-orders.component';

describe('CustomerTopOrdersComponent', () => {
  let component: CustomerTopOrdersComponent;
  let fixture: ComponentFixture<CustomerTopOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTopOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTopOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
