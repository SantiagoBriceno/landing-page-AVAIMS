import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsAdminComponent } from './sponsors-admin.component';

describe('SponsorsAdminComponent', () => {
  let component: SponsorsAdminComponent;
  let fixture: ComponentFixture<SponsorsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorsAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
