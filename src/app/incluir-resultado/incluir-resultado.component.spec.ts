import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirResultadoComponent } from './incluir-resultado.component';

describe('IncluirResultadoComponent', () => {
  let component: IncluirResultadoComponent;
  let fixture: ComponentFixture<IncluirResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
