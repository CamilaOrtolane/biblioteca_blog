import { Component, Input } from '@angular/core';
import { Livro } from '../../../models/livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-livro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-livro.html',
  styleUrl: './card-livro.scss',
})
export class CardLivro {

  @Input()
  livro: any;
}
