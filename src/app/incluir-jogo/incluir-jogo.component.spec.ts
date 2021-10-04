import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirJogoComponent } from './incluir-jogo.component';

describe('IncluirJogoComponent', () => {
  let component: IncluirJogoComponent;
  let fixture: ComponentFixture<IncluirJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
