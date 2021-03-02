import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTwelveBbComponent } from './form-twelve-bb.component';

describe('FormTwelveBbComponent', () => {
  let component: FormTwelveBbComponent;
  let fixture: ComponentFixture<FormTwelveBbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTwelveBbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTwelveBbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
