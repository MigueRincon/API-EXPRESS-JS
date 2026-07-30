import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',  // el tag HTML para usar este componente
  standalone: true,        // no necesita un modulo (Angular 17+
  templateUrl: './saludo.html',
  styleUrl: './saludo.css',
})
export class Saludo {
  nombre: string = 'Mundo';   // una propiedad (dato)
}

export class UsuarioComponent {
  nombre: string = 'Migue';
  edad: number = 25;
  activo: boolean = true;
}