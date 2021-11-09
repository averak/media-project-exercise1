import { Component, OnInit, Input } from '@angular/core';
import { DocumentModel } from 'src/app/model/document.model';

@Component({
  selector: 'app-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.css'],
})
export class DocumentCardComponent implements OnInit {
  @Input() document!: DocumentModel;

  constructor() {}

  ngOnInit(): void {}
}
