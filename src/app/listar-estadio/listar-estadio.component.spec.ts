import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEstadioComponent } from './listar-estadio.component';

describe('ListarEstadioComponent', () => {
  let component: ListarEstadioComponent;
  let fixture: ComponentFixture<ListarEstadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEstadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEstadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
