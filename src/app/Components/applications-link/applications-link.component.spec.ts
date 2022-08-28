import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsLinkComponent } from './applications-link.component';

describe('ApplicationsLinkComponent', () => {
  let component: ApplicationsLinkComponent;
  let fixture: ComponentFixture<ApplicationsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
