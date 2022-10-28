import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPeopleComponent } from './crud-people.component';

describe('CrudPeopleComponent', () => {
  let component: CrudPeopleComponent;
  let fixture: ComponentFixture<CrudPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
