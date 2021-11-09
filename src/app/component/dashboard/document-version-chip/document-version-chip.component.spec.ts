import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentVersionChipComponent } from './document-version-chip.component';

describe('DocumentVersionChipComponent', () => {
  let component: DocumentVersionChipComponent;
  let fixture: ComponentFixture<DocumentVersionChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentVersionChipComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentVersionChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
