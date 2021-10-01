import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarJogoComponent } from './jogo-listar/listar-jogo.component';

const routes: Routes = [
  {path:'listarjogos', component: ListarJogoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
