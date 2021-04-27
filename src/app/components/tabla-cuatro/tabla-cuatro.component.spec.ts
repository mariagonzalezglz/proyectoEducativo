import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCuatroComponent } from './tabla-cuatro.component';

describe('TablaCuatroComponent', () => {
  let component: TablaCuatroComponent;
  let fixture: ComponentFixture<TablaCuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
