import { JogoService } from './../services/jogo.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarJogoComponent } from './alterar-jogo.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('AlterarJogoComponent', () => {
  let component: AlterarJogoComponent;
  let fixture: ComponentFixture<AlterarJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, HttpClientModule, FormsModule],
      providers: [
        { provide: ActivatedRoute,
          useValue: { snapshot: { queryParamMap: {  get(): number {  return 6;  }   }    }  }}, 
          JogoService ],
      declarations: [ AlterarJogoComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AlterarJogoComponent);
    component = fixture.debugElement.componentInstance;
 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
