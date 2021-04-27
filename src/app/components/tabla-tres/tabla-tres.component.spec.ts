import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTresComponent } from './tabla-tres.component';

describe('TablaTresComponent', () => {
  let component: TablaTresComponent;
  let fixture: ComponentFixture<TablaTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
