import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersItemComponent } from './speakers-item.component';

describe('SpeakersItemComponent', () => {
  let component: SpeakersItemComponent;
  let fixture: ComponentFixture<SpeakersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakersItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
