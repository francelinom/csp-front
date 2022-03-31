import { ClientesService } from './clientes.service';
import { ClientesModule } from './clientes/clientes.module';
import { TemplateModule } from './template/template.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, TemplateModule, ClientesModule],
  providers: [ClientesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
