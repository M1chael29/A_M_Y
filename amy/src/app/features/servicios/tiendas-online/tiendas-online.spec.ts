import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendasOnline } from './tiendas-online';

describe('TiendasOnline', () => {
  let component: TiendasOnline;
  let fixture: ComponentFixture<TiendasOnline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiendasOnline],
    }).compileComponents();

    fixture = TestBed.createComponent(TiendasOnline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
