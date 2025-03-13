import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalAlliesComponent } from './institutional-allies.component';

describe('InstitutionalAlliesComponent', () => {
  let component: InstitutionalAlliesComponent;
  let fixture: ComponentFixture<InstitutionalAlliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalAlliesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionalAlliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
