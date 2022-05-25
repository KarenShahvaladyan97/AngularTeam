import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransationsPageComponent } from './transations-page.component';

describe('TransationsPageComponent', () => {
  let component: TransationsPageComponent;
  let fixture: ComponentFixture<TransationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransationsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
