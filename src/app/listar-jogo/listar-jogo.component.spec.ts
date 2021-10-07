import { JogoService } from './../services/jogo.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJogoComponent } from './listar-jogo.component';

describe('ListarJogoComponent', () => {
  let component: ListarJogoComponent;
  let fixture: ComponentFixture<ListarJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [JogoService],
      declarations: [ ListarJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
