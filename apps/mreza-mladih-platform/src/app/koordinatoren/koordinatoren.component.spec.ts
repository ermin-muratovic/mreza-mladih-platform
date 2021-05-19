import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoordinatorenComponent } from './koordinatoren.component';

describe('KoordinatorenComponent', () => {
  let component: KoordinatorenComponent;
  let fixture: ComponentFixture<KoordinatorenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoordinatorenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoordinatorenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
