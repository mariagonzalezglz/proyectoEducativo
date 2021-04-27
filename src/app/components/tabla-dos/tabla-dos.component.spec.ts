import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDosComponent } from './tabla-dos.component';

describe('TablaDosComponent', () => {
  let component: TablaDosComponent;
  let fixture: ComponentFixture<TablaDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
