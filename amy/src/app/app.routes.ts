import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.Home),
    pathMatch: 'full',
    title: 'Inicio - AMY'
  },
  {
    path: 'servicios',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/servicios/servicios').then(m => m.Servicios),
      },
      {
        path: 'landing-pages',
        loadComponent: () => import('./features/servicios/landing-pages/landing-pages').then(m => m.LandingPages),
      },
      {
        path: 'mantenimiento-web',
        loadComponent: () => import('./features/servicios/mantenimiento-web/mantenimiento-web').then(m => m.MantenimientoWeb),
      },
      {
        path: 'sitios-corporativos',
        loadComponent: () => import('./features/servicios/sitios-corporativos/sitios-corporativos').then(m => m.SitiosCorporativos),
      },
      {
        path: 'tiendas-online',
        loadComponent: () => import('./features/servicios/tiendas-online/tiendas-online').then(m => m.TiendasOnline)
      }
    ]
  },
  {
    path: 'portafolio',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/portafolio/portafolio').then(m => m.Portafolio),
      },
      {
        path: ':id',
        loadComponent: () => import('./features/portafolio/proyecto-detalle/proyecto-detalle').then(m => m.ProyectoDetalle)
      }
    ]
  },
  {
    path: 'blog',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/blog/blog').then(m => m.Blog)
      },
      {
        path: ':slug',
        loadComponent: () => import('./features/blog/articulo-detalle/articulo-detalle').then(m => m.ArticuloDetalle)
      }
    ]
  },
  {
    path: 'contacto',
    loadComponent: () => import('./features/contacto/contacto').then(m => m.Contacto)
  },
  {
    path: 'legal',
    loadComponent: () => import('./features/legal/legal').then(m => m.Legal)
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then(m => m.NotFound)
  }
];
