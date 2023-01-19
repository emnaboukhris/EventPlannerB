import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSponsorsComponent } from './admin-sponsors.component';

describe('AdminSponsorsComponent', () => {
  let component: AdminSponsorsComponent;
  let fixture: ComponentFixture<AdminSponsorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSponsorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
