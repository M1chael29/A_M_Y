import { TestBed } from '@angular/core';
import { FeaturesGrid } from './features-grid';

describe('FeaturesGrid', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [FeaturesGrid]
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(FeaturesGrid);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
