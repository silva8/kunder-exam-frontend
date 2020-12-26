import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperBannerComponent } from './super-banner.component';

describe('SuperBannerComponent', () => {
  let component: SuperBannerComponent;
  let fixture: ComponentFixture<SuperBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
