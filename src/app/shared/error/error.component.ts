import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent {
  routesLink = [
    {
      title: 'ir a login',
      url: '/auth/login',
    },
    {
      title: 'ir a registro',
      url: '/auth/registro',
    },
    {
      title: 'ir a listado',
      url: '/heroes/listado',
    },
    {
      title: 'ir a agregar',
      url: '/heroes/agregar',
    },
    {
      title: 'ir a editar',
      url: '/heroes/editar/id',
    },
    {
      title: 'ir a heroe',
      url: '/heroes/heroe',
    },
  ];
}
