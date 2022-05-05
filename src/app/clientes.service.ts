import { environment } from './../environments/environment.prod';
import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private httpClient: HttpClient) {}

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(`${URL}/api/clientes`, cliente);
  }

  atualizar(cliente: Cliente): Observable<any> {
    return this.httpClient.put<Cliente>(
      `${URL}/api/clientes/${cliente.id}`,
      cliente
    );
  }

  getClientes(): Observable<Cliente[]> {
    const tokenString: any = localStorage.getItem('access_token');
    const token = JSON.parse(tokenString);
    const headers = {
      Authorization: 'Bearer ' + token.access_token,
    };
    return this.httpClient.get<Cliente[]>(`${URL}/api/clientes`, { headers });
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.httpClient.get<any>(`${URL}/api/clientes/${id}`);
  }

  deletar(cliente: Cliente): Observable<any> {
    return this.httpClient.delete<any>(`${URL}/api/clientes/${cliente.id}`);
  }
}
