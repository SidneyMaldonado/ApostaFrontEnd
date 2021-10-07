import { ResultadoService } from './../services/resultado.service';
import { ClubeService } from './../services/clube.service';
import { JogoService } from './../services/jogo.service';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirResultadoComponent } from './incluir-resultado.component';

describe('IncluirResultadoComponent', () => {
  let component: IncluirResultadoComponent;
  let fixture: ComponentFixture<IncluirResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      providers: [JogoService, ClubeService, ResultadoService],
      declarations: [ IncluirResultadoComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(IncluirResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
