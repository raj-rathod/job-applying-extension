import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerPagesLinkComponent } from './career-pages-link.component';

describe('CareerPagesLinkComponent', () => {
  let component: CareerPagesLinkComponent;
  let fixture: ComponentFixture<CareerPagesLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerPagesLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerPagesLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
