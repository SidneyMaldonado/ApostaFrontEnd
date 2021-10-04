import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarApostaComponent } from './alterar-aposta.component';

describe('AlterarApostaComponent', () => {
  let component: AlterarApostaComponent;
  let fixture: ComponentFixture<AlterarApostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarApostaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarApostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
