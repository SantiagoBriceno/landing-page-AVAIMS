import { ComponentFixture, TestBed } from '@angular/core/testing'

import { OurProfAdminComponent } from './our-prof-admin.component'

describe('OurProfAdminComponent', () => {
  let component: OurProfAdminComponent
  let fixture: ComponentFixture<OurProfAdminComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurProfAdminComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(OurProfAdminComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
