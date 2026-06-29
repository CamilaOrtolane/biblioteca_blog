import { Injectable, inject } from '@angular/core';
import { Livro } from '../models/livro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  // private http = inject(HttpClient);

  //private apiUrl = 'https://book-blog-backend-l0ws.onrender.com/livros';

   constructor(private http: HttpClient) {}

   buscarCatalogo() {
    return this.http.get<any[]>('assets/livros.json');
  }
  buscarLivros() {
    return this.http.get<any[]>('assets/livros.json');
  }

  buscarLivroPorId(id: string) {
    return this.http.get<any[]>('/assets/livros.json');
  }

  // buscarLivros(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
  // buscarCatalogo() {
  //   return this.http.get<any[]>(`${this.apiUrl}/catalogo`);
  // }
  // buscarLivrosPorTermo(termo: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/buscar?q=${termo}`);
  // }
}