import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCincoComponent } from './tabla-cinco.component';

describe('TablaCincoComponent', () => {
  let component: TablaCincoComponent;
  let fixture: ComponentFixture<TablaCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCincoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
