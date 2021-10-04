import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirEstadioComponent } from './incluir-estadio.component';

describe('IncluirEstadioComponent', () => {
  let component: IncluirEstadioComponent;
  let fixture: ComponentFixture<IncluirEstadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirEstadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirEstadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
