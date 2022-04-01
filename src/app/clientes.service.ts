import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private httpClient: HttpClient) {}

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente();
    cliente.nome = 'Fulando de tal';
    cliente.cpf = '12345678911';
    return cliente;
  }
}
