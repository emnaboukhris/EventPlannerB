import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSopnsorsComponent } from './admin-sopnsors.component';

describe('AdminSopnsorsComponent', () => {
  let component: AdminSopnsorsComponent;
  let fixture: ComponentFixture<AdminSopnsorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSopnsorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSopnsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
