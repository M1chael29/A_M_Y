import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from './hero';
import { RouterModule } from '@angular/router';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Hero, RouterModule.forRoot([]) ] // Importamos RouterModule para la prueba
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the hero component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('INGENIERÍA SIN LÍMITES');
  });
});
