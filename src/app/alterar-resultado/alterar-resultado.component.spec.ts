import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ResultadoService } from '../services/resultado.service';

import { AlterarResultadoComponent } from './alterar-resultado.component';

describe('AlterarResultadoComponent', () => {
  let component: AlterarResultadoComponent;
  let fixture: ComponentFixture<AlterarResultadoComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, HttpClientModule, FormsModule],
      providers: [
        { provide: ActivatedRoute,
          useValue: { snapshot: { queryParamMap: {  get(): number {  return 6;  }   }    }  }}, 
          ResultadoService ],
      declarations: [ AlterarResultadoComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AlterarResultadoComponent);
    component = fixture.debugElement.componentInstance;
 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
