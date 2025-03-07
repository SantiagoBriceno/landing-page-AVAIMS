import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticesAdminComponent } from './notices-admin.component';

describe('NoticesAdminComponent', () => {
  let component: NoticesAdminComponent;
  let fixture: ComponentFixture<NoticesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticesAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
