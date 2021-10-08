import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubeService } from '../services/clube.service';

import { ListarClubeComponent } from './listar-clube.component';

describe('ListarClubeComponent', () => {
  let component: ListarClubeComponent;
  let fixture: ComponentFixture<ListarClubeComponent>;
  let h1: HTMLElement;
  
  let app: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[ClubeService],
      declarations: [ ListarClubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#Title - O titulo deve aparecer no HTML', () => {
    let expected:string = 'Listar Clube';
    h1 = app.querySelector('h1');
    let result = h1.innerHTML;
    expect(result).toContain(expected);
  });

  it('#Botão enviar - O botão enviar deve aparecer no html', () => {
    let expected: string = 'Enviar';
    h1= app.querySelector('#botaoEnviar');
    let result= h1.innerHTML;
    expect(result).toEqual(expected)
  });
});
