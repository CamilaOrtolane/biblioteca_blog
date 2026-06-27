import { Component } from '@angular/core';
import { CardLivro } from "../card-livro/card-livro";

@Component({
  selector: 'app-hero',
  imports: [CardLivro],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
