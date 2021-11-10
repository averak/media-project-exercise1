import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernWebComponent } from './modern-web.component';

describe('ModernWebComponent', () => {
  let component: ModernWebComponent;
  let fixture: ComponentFixture<ModernWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModernWebComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
