import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirClubeComponent } from './incluir-clube.component';

describe('IncluirClubeComponent', () => {
  let component: IncluirClubeComponent;
  let fixture: ComponentFixture<IncluirClubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirClubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirClubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
