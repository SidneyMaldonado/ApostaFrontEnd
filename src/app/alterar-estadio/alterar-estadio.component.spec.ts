import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarEstadioComponent } from './alterar-estadio.component';

describe('AlterarEstadioComponent', () => {
  let component: AlterarEstadioComponent;
  let fixture: ComponentFixture<AlterarEstadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarEstadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarEstadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
