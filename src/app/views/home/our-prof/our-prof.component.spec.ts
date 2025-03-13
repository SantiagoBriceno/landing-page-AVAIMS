import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProfComponent } from './our-prof.component';

describe('OurProfComponent', () => {
  let component: OurProfComponent;
  let fixture: ComponentFixture<OurProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurProfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
