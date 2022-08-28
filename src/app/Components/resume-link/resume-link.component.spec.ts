import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeLinkComponent } from './resume-link.component';

describe('ResumeLinkComponent', () => {
  let component: ResumeLinkComponent;
  let fixture: ComponentFixture<ResumeLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
