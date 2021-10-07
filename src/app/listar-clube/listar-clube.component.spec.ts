import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubeService } from '../services/clube.service';

import { ListarClubeComponent } from './listar-clube.component';

describe('ListarClubeComponent', () => {
  let component: ListarClubeComponent;
  let fixture: ComponentFixture<ListarClubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[ClubeService],
      declarations: [ ListarClubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
