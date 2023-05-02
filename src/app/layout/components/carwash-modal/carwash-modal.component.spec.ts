import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwashModalComponent } from './carwash-modal.component';

describe('CarwashModalComponent', () => {
  let component: CarwashModalComponent;
  let fixture: ComponentFixture<CarwashModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarwashModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarwashModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
