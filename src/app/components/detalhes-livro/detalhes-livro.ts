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
    private livroService: LivrosService,
    private location: Location
  ) {}

  ngOnInit() {
  const id = Number(this.route.snapshot.queryParamMap.get('id'));

  this.livroService.buscarLivroPorId(id).subscribe({
    next: (livro) => {
      this.livro = livro;
    },
    error: (erro) => {
      console.error('Erro ao buscar livro:', erro);
    }
  });
}

avaliar(nota: number) {
  this.nota = nota;

  this.livroService.avaliarLivro(this.livro.id, nota).subscribe({
    next: (res) => {
      this.mensagem = res.mensagem;
      this.livro.media = res.media;
    },
    error: (erro) => {
      console.error('Erro ao avaliar:', erro);
    }
  });
}
  voltar() {
    this.location.back();
  }
}