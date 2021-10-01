import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AlterarClubeComponent } from './alterar-clube/alterar-clube.component';
import { IncluirClubeComponent } from './incluir-clube/incluir-clube.component';
import { ListarClubeComponent } from './listar-clube/listar-clube.component';

const routes: Routes = [
  {path:'listarclube', component: ListarClubeComponent},
  {path:'incluirclube', component: IncluirClubeComponent},
  {path:'alterarclube', component: AlterarClubeComponent},
  {path:'alterarclube/:id', component: AlterarClubeComponent},
=======
import { ListarJogoComponent } from './jogo-listar/listar-jogo.component';

const routes: Routes = [
  {path:'listarjogos', component: ListarJogoComponent}
>>>>>>> 5ebc97a1a6f55b5b4c1ba3283c4ac99c1c5a186f
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
