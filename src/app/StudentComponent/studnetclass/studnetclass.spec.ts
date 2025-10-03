import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studnetclass } from './studnetclass';

describe('Studnetclass', () => {
  let component: Studnetclass;
  let fixture: ComponentFixture<Studnetclass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studnetclass]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studnetclass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
