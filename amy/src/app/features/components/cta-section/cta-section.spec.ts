import { TestBed } from '@angular/core';
import { CtaSection } from './cta-section';

describe('CtaSection', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [CtaSection]
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(CtaSection);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
