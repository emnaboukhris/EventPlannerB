import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateSpeakerComponent } from './admin-update-speaker.component';

describe('AdminUpdateSpeakerComponent', () => {
  let component: AdminUpdateSpeakerComponent;
  let fixture: ComponentFixture<AdminUpdateSpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateSpeakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdateSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
