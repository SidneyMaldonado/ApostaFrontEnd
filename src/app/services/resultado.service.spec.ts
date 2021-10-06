// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { ResultadoService } from './resultado.service';
import * as $ from 'jquery'

interface Resultado{
  idResultado: number;
  nome:string;
  vencedor:boolean;
  idJogo:number;
  idClube:number;
}

const testUrl = 'http://localhost:8080/resultado/listar';

describe('Teste com ajax', () => {
  let httpClient: HttpClient;
  let handler: HttpHandler;
  let httpTestingController: HttpTestingController;
  let service: ResultadoService;

  beforeEach(() => {
    // Inject the http service and test controller for each test      
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ResultadoService]

    })
  });
  it('Teste de Listar do componente com BackEnd', function(doneFn) {
    $.ajax({
        url: 'http://localhost:8080/resultado/listar',
        dataType: 'json',
        success: function (data: Resultado[], response: any) {
            // Here your expected using data
            expect(data.length).toBeGreaterThanOrEqual(0)
            doneFn();
        },
        error: function( data, response){
          expect(() => { "Erro ao Testar" }).toThrow("Erro ao testar")
        }
    });
  }); 
    

})
