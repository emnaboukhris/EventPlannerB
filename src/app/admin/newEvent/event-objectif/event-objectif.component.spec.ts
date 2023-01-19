import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventObjectifComponent } from './event-objectif.component';

describe('EventObjectifComponent', () => {
  let component: EventObjectifComponent;
  let fixture: ComponentFixture<EventObjectifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventObjectifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventObjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
