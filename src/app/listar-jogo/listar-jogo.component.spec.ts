import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJogoComponent } from './listar-jogo.component';

describe('JogoComponent', () => {
  let component: ListarJogoComponent;
  let fixture: ComponentFixture<ListarJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
