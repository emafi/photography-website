import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoudoirComponent } from './boudoir.component';

describe('BoudoirComponent', () => {
  let component: BoudoirComponent;
  let fixture: ComponentFixture<BoudoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoudoirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoudoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
