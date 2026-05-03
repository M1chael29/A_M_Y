import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloDetalle } from './articulo-detalle';

describe('ArticuloDetalle', () => {
  let component: ArticuloDetalle;
  let fixture: ComponentFixture<ArticuloDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticuloDetalle],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticuloDetalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
