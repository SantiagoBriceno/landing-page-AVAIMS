import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAlliesComponent } from './our-allies.component';

describe('OurAlliesComponent', () => {
  let component: OurAlliesComponent;
  let fixture: ComponentFixture<OurAlliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurAlliesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurAlliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
