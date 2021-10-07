import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ClubeService } from '../services/clube.service';

import { IncluirClubeComponent } from './incluir-clube.component';

describe('IncluirClubeComponent', () => {
  let component: IncluirClubeComponent;
  let fixture: ComponentFixture<IncluirClubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      providers: [ClubeService],
      declarations: [ IncluirClubeComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(IncluirClubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
