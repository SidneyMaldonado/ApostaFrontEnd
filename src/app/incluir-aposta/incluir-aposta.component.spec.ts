import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirApostaComponent } from './incluir-aposta.component';

describe('IncluirApostaComponent', () => {
  let component: IncluirApostaComponent;
  let fixture: ComponentFixture<IncluirApostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirApostaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirApostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
