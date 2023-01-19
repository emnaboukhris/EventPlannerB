import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateSopnsorComponent } from './admin-update-sopnsor.component';

describe('AdminUpdateSopnsorComponent', () => {
  let component: AdminUpdateSopnsorComponent;
  let fixture: ComponentFixture<AdminUpdateSopnsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateSopnsorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdateSopnsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
