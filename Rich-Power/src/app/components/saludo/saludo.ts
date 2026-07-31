import { Component } from '@angular/core';

@Component({
<<<<<<< HEAD
  selector: 'app-saludo',  // el tag HTML para usar este componente
  standalone: true,        // no necesita un modulo (Angular 17+
=======
  selector: 'app-saludo', // el tag HTML para usar este componente
  standalone: true,       // no necesita un modulo (Angular 17+)
  imports: [],
>>>>>>> 1d9e4f2d785052bc61c3da907b3343e98cdf8ca8
  templateUrl: './saludo.html',
  styleUrl: './saludo.css',
})
export class Saludo {
<<<<<<< HEAD
  nombre: string = 'Mundo';   // una propiedad (dato)
}

export class UsuarioComponent {
  nombre: string = 'Migue';
  edad: number = 25;
  activo: boolean = true;
}
=======
  nombre: string = 'Mundo';     // una propiedad (dato)
}
>>>>>>> 1d9e4f2d785052bc61c3da907b3343e98cdf8ca8
