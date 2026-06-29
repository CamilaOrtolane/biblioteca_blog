import { Component, Input } from '@angular/core';
import { Livro } from '../../../models/livro';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-card-livro',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-livro.html',
  styleUrl: './card-livro.scss',
})
export class CardLivro {

  @Input()
  livro: any;
}
