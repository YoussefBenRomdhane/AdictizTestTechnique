import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ad.RechercheComponent } from './ad.recherche.component';

describe('Ad.RechercheComponent', () => {
  let component: Ad.RechercheComponent;
  let fixture: ComponentFixture<Ad.RechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ad.RechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ad.RechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
