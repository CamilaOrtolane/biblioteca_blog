import { Component } from '@angular/core';
import { LivroService } from '../../services/livro';
import { CommonModule } from '@angular/common';
import { CardLivro } from './card-livro/card-livro';
import { Navbar } from '../navbar/navbar';
import { Hero } from './hero/hero';
import { Livro } from '../../models/livro';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    CardLivro,
    Navbar,
    Hero
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  livros: Livro[] = [];

  constructor(
    private livroService: LivroService
  ){}

  ngOnInit(){
    this.livros = 
      this.livroService.getLivros();
  }
  //dá pra criar metódo aqui dentro
}
