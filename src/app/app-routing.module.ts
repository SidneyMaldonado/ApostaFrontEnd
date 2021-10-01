import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarClubeComponent } from './alterar-clube/alterar-clube.component';
import { IncluirClubeComponent } from './incluir-clube/incluir-clube.component';
import { ListarClubeComponent } from './listar-clube/listar-clube.component';

const routes: Routes = [
  {path:'listarclube', component: ListarClubeComponent},
  {path:'incluirclube', component: IncluirClubeComponent},
  {path:'alterarclube', component: AlterarClubeComponent},
  {path:'alterarclube/:id', component: AlterarClubeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
