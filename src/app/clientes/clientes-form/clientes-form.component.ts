import { ActivatedRoute, Router } from '@angular/router';
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
  id!: number;

  constructor(
    private clientesService: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    let params = this.activatedRoute.params;
    params.subscribe((urlParams) => {
      this.id = urlParams['id'];
      if (this.id) {
        this.clientesService.getClienteById(this.id).subscribe(
          (response) => (this.cliente = response),
          (errorResponse) => (this.cliente = new Cliente())
        );
      }
    });
  }

  onSubmit() {
    if (this.id) {
      this.clientesService.atualizar(this.cliente).subscribe(
        (response) => {
          this.success = true;
          this.errors = [];
        },
        (errorResponse) => {
          this.errors = ['Erro ao atualizar o cliente'];
        }
      );
    } else {
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
  }

  voltarParaListagem() {
    this.router.navigate(['/clientes/lista']);
  }
}
