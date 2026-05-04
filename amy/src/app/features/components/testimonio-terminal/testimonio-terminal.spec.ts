import { TestBed } from '@angular/core';
import { TestimonioTerminal } from './testimonio-terminal';

describe('TestimonioTerminal', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [TestimonioTerminal]
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(TestimonioTerminal);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
