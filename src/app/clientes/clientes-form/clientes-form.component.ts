import { Router } from '@angular/router';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css'],
})
export class ClientesFormComponent implements OnInit {
  cliente!: Cliente;
  success: boolean = false;
  errors!: string[];

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.clientesService.salvar(this.cliente).subscribe(
      (response) => {
        this.success = true;
        this.errors = [];
        this.cliente = response;
        this.router.navigate(['/clientes-lista']);
      },
      (errorResponse) => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
    );
  }

  voltarParaListagem() {
    this.router.navigate(['/clientes-lista']);
  }
}
