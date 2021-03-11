import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistorDbComponent } from './registor-db.component';

describe('RegistorDbComponent', () => {
  let component: RegistorDbComponent;
  let fixture: ComponentFixture<RegistorDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistorDbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistorDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
