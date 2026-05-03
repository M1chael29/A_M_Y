import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitiosCorporativos } from './sitios-corporativos';

describe('SitiosCorporativos', () => {
  let component: SitiosCorporativos;
  let fixture: ComponentFixture<SitiosCorporativos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitiosCorporativos],
    }).compileComponents();

    fixture = TestBed.createComponent(SitiosCorporativos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
