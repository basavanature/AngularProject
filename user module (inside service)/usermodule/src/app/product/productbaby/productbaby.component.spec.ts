import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbabyComponent } from './productbaby.component';

describe('ProductbabyComponent', () => {
  let component: ProductbabyComponent;
  let fixture: ComponentFixture<ProductbabyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductbabyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
