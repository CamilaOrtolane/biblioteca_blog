import { Component } from '@angular/core';
import { LivrosService } from '../../services/livro';
import { CommonModule } from '@angular/common';
import { CardLivro } from './card-livro/card-livro';
import { Navbar } from '../navbar/navbar';
import { Hero } from './hero/hero';
import { Livro } from '../../models/livro';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    CardLivro,
    Navbar,
    Hero
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  livros: any[] = [];

  constructor(private livrosService: LivrosService) {}
  termoBusca = 'romance';

  ngOnInit() {
    this.buscarLivros();
  }

  buscarLivros(){
    this.livrosService.buscarLivros(this.termoBusca)
      .subscribe((dados) => {
        this.livros = dados;
      });
  }
  //dá pra criar metódo aqui dentro
}
