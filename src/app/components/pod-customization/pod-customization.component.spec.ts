import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodCustomizationComponent } from './pod-customization.component';

describe('PodCustomizationComponent', () => {
  let component: PodCustomizationComponent;
  let fixture: ComponentFixture<PodCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodCustomizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
