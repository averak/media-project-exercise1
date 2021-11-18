import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'src/app/shared/service/markdown.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
})
export class DocumentComponent implements OnInit {
  markdown!: string;

  constructor(private markdownService: MarkdownService) {}

  ngOnInit(): void {
    this.markdownService.getMarkdown().subscribe((markdown) => {
      if (markdown) {
        this.markdown = markdown;
      }
    });
  }
}
