import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegidtrationComponent } from './regidtration.component';

describe('RegidtrationComponent', () => {
  let component: RegidtrationComponent;
  let fixture: ComponentFixture<RegidtrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegidtrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegidtrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
