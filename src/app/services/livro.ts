import { Injectable } from '@angular/core';
import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  livros: Livro[] = [
    {
      id: 1,
      titulo: '1984',
      categoria: 'Ficção',
      descricao: 'Um clássico distópico.',
      capa: 'assets/livros/1984.jpg',
      avaliacao: 4,
      comentarios: 128
    },
    {
      id: 2,
      titulo: 'O Hobbit',
      categoria: 'Fantasia',
      descricao: 'A jornada inesperada de Bilbo.',
      capa: 'assets/livros/hobbit.jpg',
      avaliacao: 5,
      comentarios: 96
    },
    {
      id: 3,
      titulo: 'Dom Casmurro',
      categoria: 'Clássico',
      descricao: 'Machado de Assis.',
      capa: 'assets/livros/dom.jpg',
      avaliacao: 4,
      comentarios: 112
    }
  ];

  getLivros() {
    return this.livros;
  }

}
