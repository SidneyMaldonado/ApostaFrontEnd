import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/entities/cliente';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private servicoCliente: ClienteServiceService) { }

  ngOnInit(): void {
    this.servicoCliente.listar().subscribe(
      dados => { this.clientes= dados, console.log(this.clientes) },
      error => { console.log("Erro ao recuperar clubes ", error)}
    )
  }

}
