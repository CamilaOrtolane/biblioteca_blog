import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LivrosService } from '../../services/livro';

@Component({
  selector: 'app-detalhes-livro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes-livro.html',
  styleUrl: './detalhes-livro.scss'
})
export class DetalhesLivro {
  livro: any;
  nota = 0;
  mensagem = '';

  constructor(
    private route: ActivatedRoute,
    private livrosService: LivrosService,
    private location: Location
  ) {}

  ngOnInit() {
    const livroState = history.state.livro;

    if (livroState) {
      this.livro = livroState;
      return;
    }

    const id = this.route.snapshot.paramMap.get('id');

    this.livrosService.buscarLivros().subscribe((livros) => {
      this.livro = livros.find((livro) => livro.id === id);
    });
  }

  voltar() {
    this.location.back();
  }

  avaliar(nota: number) {
    this.nota = nota;
    this.mensagem = 'Avaliado com sucesso';
  }

  
}