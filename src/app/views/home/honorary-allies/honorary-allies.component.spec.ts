import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonoraryAlliesComponent } from './honorary-allies.component';

describe('HonoraryAlliesComponent', () => {
  let component: HonoraryAlliesComponent;
  let fixture: ComponentFixture<HonoraryAlliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HonoraryAlliesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonoraryAlliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
