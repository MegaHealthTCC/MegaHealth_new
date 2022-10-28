import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVendorComponent } from './dialog-vendor.component';

describe('DialogVendorComponent', () => {
  let component: DialogVendorComponent;
  let fixture: ComponentFixture<DialogVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
