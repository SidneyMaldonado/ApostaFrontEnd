import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ClubeService } from '../services/clube.service';
import { EstadioService } from '../services/estadio.service';
import { JogoService } from '../services/jogo.service';

import { IncluirJogoComponent } from './incluir-jogo.component';

describe('IncluirJogoComponent', () => {
  let component: IncluirJogoComponent;
  let fixture: ComponentFixture<IncluirJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      providers: [JogoService, ClubeService, EstadioService],
      declarations: [ IncluirJogoComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(IncluirJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
