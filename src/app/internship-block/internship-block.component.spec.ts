import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipBlockComponent } from './internship-block.component';

describe('InternshipBlockComponent', () => {
  let component: InternshipBlockComponent;
  let fixture: ComponentFixture<InternshipBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
