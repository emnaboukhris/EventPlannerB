import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventComponentsComponent } from './new-event-components.component';

describe('NewEventComponentsComponent', () => {
  let component: NewEventComponentsComponent;
  let fixture: ComponentFixture<NewEventComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEventComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEventComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
