import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenApprochComponent } from './model-driven-approch.component';

describe('ModelDrivenApprochComponent', () => {
  let component: ModelDrivenApprochComponent;
  let fixture: ComponentFixture<ModelDrivenApprochComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelDrivenApprochComponent]
    });
    fixture = TestBed.createComponent(ModelDrivenApprochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
