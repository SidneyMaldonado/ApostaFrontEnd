import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoService } from '../services/resultado.service';

import { ListarResultadoComponent } from './listar-resultado.component';

describe('ListarResultadoComponent', () => {
  let component: ListarResultadoComponent;
  let fixture: ComponentFixture<ListarResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[ResultadoService],
      declarations: [ ListarResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
