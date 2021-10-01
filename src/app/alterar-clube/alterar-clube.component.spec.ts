import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarClubeComponent } from './alterar-clube.component';

describe('AlterarClubeComponent', () => {
  let component: AlterarClubeComponent;
  let fixture: ComponentFixture<AlterarClubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarClubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarClubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
