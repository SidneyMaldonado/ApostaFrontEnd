import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EstadioService } from '../services/estadio.service';

import { AlterarEstadioComponent } from './alterar-estadio.component';

describe('AlterarEstadioComponent', () => {
  let component: AlterarEstadioComponent;
  let fixture: ComponentFixture<AlterarEstadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, HttpClientModule, FormsModule],
      providers: [
        { provide: ActivatedRoute,
          useValue: { snapshot: { queryParamMap: {  get(): number {  return 6;  }   }    }  }}, 
          EstadioService ],
      declarations: [ AlterarEstadioComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AlterarEstadioComponent);
    component = fixture.debugElement.componentInstance;
 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
