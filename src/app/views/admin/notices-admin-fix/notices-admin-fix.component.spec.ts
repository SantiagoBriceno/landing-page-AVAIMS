import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticesAdminFixComponent } from './notices-admin-fix.component';

describe('NoticesAdminFixComponent', () => {
  let component: NoticesAdminFixComponent;
  let fixture: ComponentFixture<NoticesAdminFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticesAdminFixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticesAdminFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
