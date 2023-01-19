import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSpeakerComponent } from './admin-add-speaker.component';

describe('AdminAddSpeakerComponent', () => {
  let component: AdminAddSpeakerComponent;
  let fixture: ComponentFixture<AdminAddSpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddSpeakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
