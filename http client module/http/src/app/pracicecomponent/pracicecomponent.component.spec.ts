import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracicecomponentComponent } from './pracicecomponent.component';

describe('PracicecomponentComponent', () => {
  let component: PracicecomponentComponent;
  let fixture: ComponentFixture<PracicecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracicecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracicecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
