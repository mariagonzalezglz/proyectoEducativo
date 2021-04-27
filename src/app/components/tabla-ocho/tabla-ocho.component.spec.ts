import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaOchoComponent } from './tabla-ocho.component';

describe('TablaOchoComponent', () => {
  let component: TablaOchoComponent;
  let fixture: ComponentFixture<TablaOchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaOchoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaOchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
