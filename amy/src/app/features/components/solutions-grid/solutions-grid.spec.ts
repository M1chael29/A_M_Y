import { TestBed } from '@angular/core';
import { SolutionsGrid } from './solutions-grid';

describe('SolutionsGrid', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [SolutionsGrid]
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(SolutionsGrid);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
