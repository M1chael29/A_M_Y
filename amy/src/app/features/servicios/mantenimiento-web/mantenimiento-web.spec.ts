import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoWeb } from './mantenimiento-web';

describe('MantenimientoWeb', () => {
  let component: MantenimientoWeb;
  let fixture: ComponentFixture<MantenimientoWeb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantenimientoWeb],
    }).compileComponents();

    fixture = TestBed.createComponent(MantenimientoWeb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
