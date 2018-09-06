import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ad.PagePrincipaleComponent } from './ad.page-principale.component';

describe('Ad.PagePrincipaleComponent', () => {
  let component: Ad.PagePrincipaleComponent;
  let fixture: ComponentFixture<Ad.PagePrincipaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ad.PagePrincipaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ad.PagePrincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
