import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSieteComponent } from './tabla-siete.component';

describe('TablaSieteComponent', () => {
  let component: TablaSieteComponent;
  let fixture: ComponentFixture<TablaSieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaSieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaSieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
