import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAdminComponent } from './contact-admin.component';

describe('ContactAdminComponent', () => {
  let component: ContactAdminComponent;
  let fixture: ComponentFixture<ContactAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
