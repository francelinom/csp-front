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

  // getCliente(): Cliente {
  //   let cliente: Cliente = new Cliente();
  //   cliente.nome = 'Fulando de tal';
  //   cliente.cpf = '12345678911';
  //   return cliente;
  // }
}
