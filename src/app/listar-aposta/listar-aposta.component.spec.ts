import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApostaService } from '../services/aposta.service';

import { ListarApostaComponent } from './listar-aposta.component';

describe('ListarApostaComponent', () => {
  let component: ListarApostaComponent;
  let fixture: ComponentFixture<ListarApostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[ApostaService],
      declarations: [ ListarApostaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarApostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
