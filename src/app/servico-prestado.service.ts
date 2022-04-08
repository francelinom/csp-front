import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { ServicoPrestado } from './servico-prestado/servico-prestado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicoPrestadoService {
  apiURL: string = environment.apiURL + '/api/servicos-prestados';

  constructor(private http: HttpClient) {}

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(this.apiURL, servicoPrestado);
  }
}
