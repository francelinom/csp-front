import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from './login/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = environment.apiURL + '/api/usuarios';

  constructor(private httpClient: HttpClient) {}

  salvar(usuario: Usuario): Observable<any> {
    return this.httpClient.post(this.apiUrl, usuario);
  }
}
