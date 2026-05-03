import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
// Importamos la biblioteca de animaciones AOS
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  title = 'amy-digital-agency';

  ngOnInit(): void {
    /*
       Inicializamos AOS con una configuración Pro:
       - duration: 1000ms para que sea suave.
       - once: true para que no se repita la animación al subir.
       - easing: 'ease-in-out-quart' para una curva de movimiento premium.
    */
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out-quart',
      delay: 100,
    });
  }
}
