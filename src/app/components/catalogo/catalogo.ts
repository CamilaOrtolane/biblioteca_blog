import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivrosService } from '../../services/livro';
import { CardLivro } from "../home/card-livro/card-livro";

@Component({
  selector: 'app-catalogo',
  imports: [CardLivro, CommonModule, FormsModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss',
})
export class Catalogo {

  constructor(private livrosService : LivrosService){}

  livros: any[] = [];
  todosLivros: any[] = [];
   livrosOriginais: any[] = [];

  termoBusca = '';
  categoriaSelecionada = 'todos';
  ordemSelecionada = 'az';

    categorias = [
    { label: 'Todos', valor: 'todos' },
    { label: 'Romance', valor: 'romance' },
    { label: 'Fantasia', valor: 'fantasy' },
    { label: 'Terror', valor: 'horror' },
    { label: 'Mistério', valor: 'mystery' },
    { label: 'Ficção científica', valor: 'science fiction' },
    { label: 'Aventura', valor: 'adventure' },
    { label: 'Clássicos', valor: 'classic literature' }
  ];

  ngOnInit() {
    this.carregarCatalogo();
  }
    carregarCatalogo() {
    this.livrosService.buscarCatalogo().subscribe((dados) => {
      this.todosLivros = dados;
      this.aplicarFiltros();
    });
  }

  aplicarFiltros() {
  let lista = [...this.todosLivros];

  const termo = this.termoBusca.trim().toLowerCase();

  if (termo) {
    lista = lista.filter((livro) =>
      livro.titulo.toLowerCase().includes(termo) ||
      livro.autor.toLowerCase().includes(termo) ||
      livro.categoria.toLowerCase().includes(termo)
    );
  }

  if (this.categoriaSelecionada !== 'todos') {
    lista = lista.filter(
      (livro) => livro.categoria === this.categoriaSelecionada
    );
  }

  if (this.ordemSelecionada === 'az') {
    lista.sort((a, b) => a.titulo.localeCompare(b.titulo));
  }

  if (this.ordemSelecionada === 'za') {
    lista.sort((a, b) => b.titulo.localeCompare(a.titulo));
  }

  this.livros = lista;
}
}
