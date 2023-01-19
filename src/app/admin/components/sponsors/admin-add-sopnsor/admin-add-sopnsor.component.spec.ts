import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSopnsorComponent } from './admin-add-sopnsor.component';

describe('AdminAddSopnsorComponent', () => {
  let component: AdminAddSopnsorComponent;
  let fixture: ComponentFixture<AdminAddSopnsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddSopnsorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddSopnsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
