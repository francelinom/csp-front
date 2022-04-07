import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { ServicoPrestado } from './servico-prestado/servico-prestado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ServicoPrestadoService {
  constructor(private http: HttpClient) {}

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(
      `${URL}/api/servicos-prestados`,
      servicoPrestado
    );
  }
}
