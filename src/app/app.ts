import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./components/home/home";
import { Navbar } from "./components/navbar/navbar";
import { CardLivro } from "./components/home/card-livro/card-livro";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Navbar, CardLivro],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('primeiro-projeto');
}
