import { Component, OnInit } from '@angular/core';
import { DocumentModel } from 'src/app/model/document.model';
import { DocumentService } from 'src/app/shared/service/document.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  document!: DocumentModel;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.getDocument().subscribe((document) => {
      if (document.title !== undefined) {
        this.document = document;
      }
    });
  }
}
