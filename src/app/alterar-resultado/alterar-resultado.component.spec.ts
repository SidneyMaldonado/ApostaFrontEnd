import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarResultadoComponent } from './alterar-resultado.component';

describe('AlterarResultadoComponent', () => {
  let component: AlterarResultadoComponent;
  let fixture: ComponentFixture<AlterarResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
