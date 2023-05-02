import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwashListComponent } from './carwash-list.component';

describe('CarwashListComponent', () => {
  let component: CarwashListComponent;
  let fixture: ComponentFixture<CarwashListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarwashListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarwashListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
