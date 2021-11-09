import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-document-version-chip',
  templateUrl: './document-version-chip.component.html',
  styleUrls: ['./document-version-chip.component.css'],
})
export class DocumentVersionChipComponent implements OnInit {
  @Input() version!: string;

  constructor() {}

  ngOnInit(): void {}
}
