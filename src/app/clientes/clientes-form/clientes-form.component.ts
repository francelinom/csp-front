import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css'],
})
export class ClientesFormComponent implements OnInit {
  cliente?: Cliente;

  constructor(private clientesService: ClientesService) {
    this.cliente = clientesService.getCliente();
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.cliente);
  }
}
