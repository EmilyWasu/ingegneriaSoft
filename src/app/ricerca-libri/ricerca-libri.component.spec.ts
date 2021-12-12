import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaLibriComponent } from './ricerca-libri.component';

describe('RicercaLibriComponent', () => {
  let component: RicercaLibriComponent;
  let fixture: ComponentFixture<RicercaLibriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RicercaLibriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RicercaLibriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
