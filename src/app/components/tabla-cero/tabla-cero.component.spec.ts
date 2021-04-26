import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCeroComponent } from './tabla-cero.component';

describe('TablaCeroComponent', () => {
  let component: TablaCeroComponent;
  let fixture: ComponentFixture<TablaCeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
