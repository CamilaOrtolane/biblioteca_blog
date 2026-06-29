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

  ngOnInit() {
    this.carregarLivros();
  }

  carregarLivros() {
  this.livrosService.buscarLivros().subscribe({
    next: (dados) => {
      this.livros = dados
        .sort(() => Math.random() - 0.5)
        .slice(0, 12);
    },
    error: (erro) => {
      console.error('Erro ao carregar livros da home:', erro);
    }
  });
}

  // carregarLivros() {
  //   this.livrosService.buscarLivros().subscribe({
  //     next: (dados) => {
  //       this.livros = dados;
  //     },
  //     error: (erro) => {
  //       console.error('Erro ao carregar livros:', erro);
  //     }
  //   });
}
  //dá pra criar metódo aqui dentro

