import { ClienteService } from './../services/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarClienteComponent } from './alterar-cliente.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('AlterarClienteComponent', () => {
  let component: AlterarClienteComponent;
  let fixture: ComponentFixture<AlterarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, HttpClientModule, FormsModule],
      providers: [
        { provide: ActivatedRoute,
          useValue: { snapshot: { queryParamMap: {  get(): number {  return 6;  }   }    }  }}, 
          ClienteService ],
      declarations: [ AlterarClienteComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AlterarClienteComponent);
    component = fixture.debugElement.componentInstance;
 
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
