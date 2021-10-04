import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarClubeComponent } from './alterar-clube/alterar-clube.component';
import { AlterarJogoComponent } from './alterar-jogo/alterar-jogo.component';
import { IncluirClubeComponent } from './incluir-clube/incluir-clube.component';
import { IncluirJogoComponent } from './incluir-jogo/incluir-jogo.component';
import { ListarJogoComponent } from './listar-jogo/listar-jogo.component';
import { ListarClubeComponent } from './listar-clube/listar-clube.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente/listar-cliente.component';

const routes: Routes = [
  {path:'listarclube', component: ListarClubeComponent},
  {path:'incluirclube', component: IncluirClubeComponent},
  {path:'alterarclube', component: AlterarClubeComponent},
  {path:'alterarclube/:id', component: AlterarClubeComponent},
  {path:'listarjogos', component: ListarJogoComponent},
  {path:'incluirjogo',component:IncluirJogoComponent},
  {path:'alterarjogo/:id',component:AlterarJogoComponent},
  {path:'listarclientes', component: ListarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
