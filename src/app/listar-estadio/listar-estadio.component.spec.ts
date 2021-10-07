import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadioService } from '../services/estadio.service';

import { ListarEstadioComponent } from './listar-estadio.component';

describe('ListarEstadioComponent', () => {
  let component: ListarEstadioComponent;
  let fixture: ComponentFixture<ListarEstadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[EstadioService],
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
