import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSeisComponent } from './tabla-seis.component';

describe('TablaSeisComponent', () => {
  let component: TablaSeisComponent;
  let fixture: ComponentFixture<TablaSeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaSeisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
