import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ClubeService } from './../services/clube.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarClubeComponent } from './alterar-clube.component';

describe('AlterarClubeComponent', () => {
  let component: AlterarClubeComponent;
  let fixture: ComponentFixture<AlterarClubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, HttpClientModule, FormsModule],
      providers: [
        { provide: ActivatedRoute,
          useValue: { snapshot: { queryParamMap: {  get(): number {  return 6;  }   }    }  }}, 
          ClubeService ],
      declarations: [ AlterarClubeComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AlterarClubeComponent);
    component = fixture.debugElement.componentInstance;
 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
