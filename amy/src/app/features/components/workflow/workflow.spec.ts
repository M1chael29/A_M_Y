import { TestBed } from '@angular/core';
import { Workflow } from './workflow';

describe('Workflow', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [Workflow]
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(Workflow);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
