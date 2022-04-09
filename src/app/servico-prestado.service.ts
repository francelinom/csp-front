import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-lista/servico-prestado-busca';
import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { ServicoPrestado } from './servico-prestado/servico-prestado';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  buscar(nome: string, mes: number): Observable<ServicoPrestadoBusca[]> {
    const httpParams = new HttpParams()
      .set('nome', nome)
      .set('mes', mes.toString());

    const url = this.apiURL + '?' + httpParams.toString();
    console.log('url', url);
    return this.http.get<ServicoPrestado[]>(url);
  }
}
