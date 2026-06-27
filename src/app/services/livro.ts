import { Injectable, inject } from '@angular/core';
import { Livro } from '../models/livro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  // private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/livros';

   constructor(private http: HttpClient) {}

  buscarLivros(termo: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?q=${termo}`);
  }
}