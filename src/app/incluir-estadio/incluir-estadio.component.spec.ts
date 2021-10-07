import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EstadioService } from '../services/estadio.service';

import { IncluirEstadioComponent } from './incluir-estadio.component';

describe('IncluirEstadioComponent', () => {
  let component: IncluirEstadioComponent;
  let fixture: ComponentFixture<IncluirEstadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      providers: [EstadioService],
      declarations: [ IncluirEstadioComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(IncluirEstadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
