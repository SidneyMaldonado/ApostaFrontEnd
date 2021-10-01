import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/entidades/Jogo';
import { JogoService } from 'src/services/jogo.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './listar-jogo.component.html',
  styleUrls: ['./listar-jogo.component.css']
})
export class ListarJogoComponent implements OnInit {

  jogos: Jogo[] =[]

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.jogoService.listar().subscribe(
      dados => this.jogos = dados,
      error => alert("erro ao recuperar roupas.")
    )
  }

}
