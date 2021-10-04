import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClubeComponent } from './listar-clube/listar-clube.component';
import { IncluirClubeComponent } from './incluir-clube/incluir-clube.component';
import { AlterarClubeComponent } from './alterar-clube/alterar-clube.component';
import { ListarJogoComponent } from './jogo-listar/listar-jogo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarClubeComponent,
    IncluirClubeComponent,
    AlterarClubeComponent,
    ListarJogoComponent
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
