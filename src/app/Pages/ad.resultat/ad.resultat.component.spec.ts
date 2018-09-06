import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ad.ResultatComponent } from './ad.resultat.component';

describe('Ad.ResultatComponent', () => {
  let component: Ad.ResultatComponent;
  let fixture: ComponentFixture<Ad.ResultatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ad.ResultatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ad.ResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
