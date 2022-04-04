import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = 'http://localhost:8090';

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
    return this.httpClient.get<Cliente[]>(`${URL}/api/clientes`);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.httpClient.get<any>(`${URL}/api/clientes/${id}`);
  }
}
