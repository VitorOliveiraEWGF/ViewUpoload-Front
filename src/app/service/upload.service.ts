import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>('http://localhost:8090/upload', formData)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do cliente
      console.error('Erro ocorreu:', error.error.message);
    } else {
      // O backend retornou um código de resposta de erro
      console.error(
        `Código de status ${error.status}, ` +
        `Corpo do erro: ${error.error}`);
    }
    // Retorna um observable com uma mensagem de erro amigável.
    return throwError('Algo deu errado; tente novamente mais tarde.');
  }
}
