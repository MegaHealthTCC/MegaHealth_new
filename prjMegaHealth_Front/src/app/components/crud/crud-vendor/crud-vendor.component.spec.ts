import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudVendorComponent } from './crud-vendor.component';

describe('CrudVendorComponent', () => {
  let component: CrudVendorComponent;
  let fixture: ComponentFixture<CrudVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
