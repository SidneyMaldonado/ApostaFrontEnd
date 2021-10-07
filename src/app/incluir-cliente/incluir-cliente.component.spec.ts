import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';

import { IncluirClienteComponent } from './incluir-cliente.component';

describe('IncluirClienteComponent', () => {
  let component: IncluirClienteComponent;
  let fixture: ComponentFixture<IncluirClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      providers: [ClienteService],
      declarations: [ IncluirClienteComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(IncluirClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
