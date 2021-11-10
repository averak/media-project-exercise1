import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebIntroComponent } from './web-intro.component';

describe('WebIntroComponent', () => {
  let component: WebIntroComponent;
  let fixture: ComponentFixture<WebIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebIntroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
