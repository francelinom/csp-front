import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from './login/usuario';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = environment.apiURL + 'api/usuarios';
  tokenURL: string = environment.apiURL + environment.obterTokenUrl;
  clientID: string = environment.clientId;
  clientSecret: string = environment.clientSecret;

  constructor(private httpClient: HttpClient) {}

  salvar(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, usuario);
  }

  tentarLogar(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', password);

    const headers = {
      Authorization: 'Basic ' + btoa(`${this.clientID}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    return this.httpClient.post(this.tokenURL, params.toString(), { headers });
  }
}
