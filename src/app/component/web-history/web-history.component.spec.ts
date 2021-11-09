import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebHistoryComponent } from './web-history.component';

describe('WebHistoryComponent', () => {
  let component: WebHistoryComponent;
  let fixture: ComponentFixture<WebHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebHistoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
