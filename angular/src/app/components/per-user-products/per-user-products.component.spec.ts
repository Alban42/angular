import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerUserProductsComponent } from './per-user-products.component';

describe('PerUserProductsComponent', () => {
  let component: PerUserProductsComponent;
  let fixture: ComponentFixture<PerUserProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerUserProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerUserProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
