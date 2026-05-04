import { TestBed } from '@angular/core';
import { Stats } from './stats';

describe('Stats', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [Stats]
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(Stats);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
