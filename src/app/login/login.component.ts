import { Usuario } from './usuario';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  cadastrando!: boolean;
  msgSucesso: string = '';
  errors!: string[];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.router.navigate(['/home']);
  }

  preparaCadastrar(event: any) {
    event?.preventDefault();
    this.cadastrando = true;
  }

  cancelarCadastro() {
    this.cadastrando = false;
  }

  cadastrar() {
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService.salvar(usuario).subscribe(
      (response) => {
        this.msgSucesso = 'Cadastro Realizado com sucesso.';
      },
      (errorResponse) => {
        this.msgSucesso = '';
        this.errors = errorResponse.error.errors;
      }
    );
  }
}
