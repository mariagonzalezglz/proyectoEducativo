import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaNueveComponent } from './tabla-nueve.component';

describe('TablaNueveComponent', () => {
  let component: TablaNueveComponent;
  let fixture: ComponentFixture<TablaNueveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaNueveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaNueveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
