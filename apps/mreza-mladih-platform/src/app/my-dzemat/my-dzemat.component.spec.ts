import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDzematComponent } from './my-dzemat.component';

describe('MyDzematComponent', () => {
  let component: MyDzematComponent;
  let fixture: ComponentFixture<MyDzematComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDzematComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDzematComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
