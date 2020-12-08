import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovineComponent } from './novine.component';

describe('NovineComponent', () => {
  let component: NovineComponent;
  let fixture: ComponentFixture<NovineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
