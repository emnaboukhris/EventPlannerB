import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreationBaseLayoutComponent } from './event-creation-base-layout.component';

describe('EventCreationBaseLayoutComponent', () => {
  let component: EventCreationBaseLayoutComponent;
  let fixture: ComponentFixture<EventCreationBaseLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCreationBaseLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCreationBaseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
