import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributingAlliesComponent } from './contributing-allies.component';

describe('ContributingAlliesComponent', () => {
  let component: ContributingAlliesComponent;
  let fixture: ComponentFixture<ContributingAlliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributingAlliesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributingAlliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
