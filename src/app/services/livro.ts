import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  private apiUrl = 'https://book-blog-backend-l0ws.onrender.com/livros';

  constructor(private http: HttpClient) {}

  buscarLivros(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  buscarCatalogo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/catalogo`);
  }

  buscarLivroPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  avaliarLivro(id: number, nota: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}/avaliar`, {
      nota_ava: nota,
      id_usu: 1
    });
  }
}