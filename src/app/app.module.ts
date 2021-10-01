import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ListarClienteComponent } from './listar-cliente/listar-cliente/listar-cliente.component';
=======
import { ListarClubeComponent } from './listar-clube/listar-clube.component';
import { IncluirClubeComponent } from './incluir-clube/incluir-clube.component';
import { AlterarClubeComponent } from './alterar-clube/alterar-clube.component';
import { ListarJogoComponent } from './jogo-listar/listar-jogo.component';
>>>>>>> eaac79b408be838bd6c30316c04a5d47ec32cb5c

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ListarClienteComponent
=======
    ListarClubeComponent,
    IncluirClubeComponent,
    AlterarClubeComponent,
    ListarJogoComponent
>>>>>>> eaac79b408be838bd6c30316c04a5d47ec32cb5c
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
