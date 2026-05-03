import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPages } from './landing-pages';

describe('LandingPages', () => {
  let component: LandingPages;
  let fixture: ComponentFixture<LandingPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPages],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
