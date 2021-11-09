import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DocumentModel } from 'src/app/model/document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
})
export class DocumentListComponent implements OnInit {
  documents: DocumentModel[] = environment.documents;

  constructor() {}

  ngOnInit(): void {
    // タイトルでソート
    this.documents.sort((a, b) => a.title.localeCompare(b.title, 'ja'));
  }
}
