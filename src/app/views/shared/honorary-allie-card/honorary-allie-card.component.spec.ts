import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonoraryAllieCardComponent } from './honorary-allie-card.component';

describe('HonoraryAllieCardComponent', () => {
  let component: HonoraryAllieCardComponent;
  let fixture: ComponentFixture<HonoraryAllieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HonoraryAllieCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonoraryAllieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
