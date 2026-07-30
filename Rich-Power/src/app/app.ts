import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludo } from './components/saludo/saludo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Saludo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Rich-Power');
}
