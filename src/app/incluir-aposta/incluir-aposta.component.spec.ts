import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ApostaService } from '../services/aposta.service';
import { ClienteService } from '../services/cliente.service';
import { JogoService } from '../services/jogo.service';

import { IncluirApostaComponent } from './incluir-aposta.component';

describe('IncluirApostaComponent', () => {
  let component: IncluirApostaComponent;
  let fixture: ComponentFixture<IncluirApostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      providers: [ApostaService, ClienteService, JogoService],
      declarations: [ IncluirApostaComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(IncluirApostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
