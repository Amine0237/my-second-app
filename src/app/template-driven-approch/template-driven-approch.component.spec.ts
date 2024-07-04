import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenApprochComponent } from './template-driven-approch.component';

describe('TemplateDrivenApprochComponent', () => {
  let component: TemplateDrivenApprochComponent;
  let fixture: ComponentFixture<TemplateDrivenApprochComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDrivenApprochComponent]
    });
    fixture = TestBed.createComponent(TemplateDrivenApprochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
