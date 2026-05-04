import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit {

  // Variables de Estado
  private scrolled: boolean = false;
  public isMenuCollapsed: boolean = true;

  constructor() {}

  ngOnInit(): void {
    // Console log estilo terminal
    console.log('AMY_SYSTEM: Navbar_Node [ONLINE] | Mode: Ultra_Insano_God_Tier');
  }

  // Listener para el efecto Glassmorphism basado en el scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // Activamos la clase navbar-scrolled si bajamos más de 50px
    this.scrolled = offset > 50;
  }

  // Retorna el estado del scroll al HTML
  isScrolled(): boolean {
    return this.scrolled;
  }

  // Alternador del menú hamburguesa móvil
  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  // Cierra el menú al navegar (Crucial para móvil)
  closeMenu(): void {
    this.isMenuCollapsed = true;
  }
}
