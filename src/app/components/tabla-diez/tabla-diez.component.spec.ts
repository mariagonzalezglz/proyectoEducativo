import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDiezComponent } from './tabla-diez.component';

describe('TablaDiezComponent', () => {
  let component: TablaDiezComponent;
  let fixture: ComponentFixture<TablaDiezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaDiezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDiezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
