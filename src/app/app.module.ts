import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClubeComponent } from './listar-clube/listar-clube.component';
import { IncluirClubeComponent } from './incluir-clube/incluir-clube.component';
import { AlterarClubeComponent } from './alterar-clube/alterar-clube.component';
import { ListarJogoComponent } from './listar-jogo/listar-jogo.component';
import { IncluirJogoComponent } from './incluir-jogo/incluir-jogo.component';
import { AlterarJogoComponent } from './alterar-jogo/alterar-jogo.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente/listar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarClubeComponent,
    IncluirClubeComponent,
    AlterarClubeComponent,
    ListarJogoComponent,
    IncluirJogoComponent,
    AlterarJogoComponent,
    ListarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
