import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApostaService } from '../services/aposta.service';

import { AlterarApostaComponent } from './alterar-aposta.component';

describe('AlterarApostaComponent', () => {
  let component: AlterarApostaComponent;
  let fixture: ComponentFixture<AlterarApostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, HttpClientModule, FormsModule],
      providers: [
        { provide: ActivatedRoute,
          useValue: { snapshot: { queryParamMap: {  get(): number {  return 6;  }   }    }  }}, 
          ApostaService ],
      declarations: [ AlterarApostaComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AlterarApostaComponent);
    component = fixture.debugElement.componentInstance;
 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
