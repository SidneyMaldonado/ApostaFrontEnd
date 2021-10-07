import { JogoService } from './../services/jogo.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarJogoComponent } from './alterar-jogo.component';

describe('AlterarJogoComponent', () => {
  let component: AlterarJogoComponent;
  let fixture: ComponentFixture<AlterarJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [JogoService],
      declarations: [AlterarJogoComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AlterarJogoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
