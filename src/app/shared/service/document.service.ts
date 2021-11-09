import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DocumentModel } from 'src/app/model/document.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  documents: DocumentModel[] = environment.documents;
  document = new BehaviorSubject<DocumentModel>({} as DocumentModel);

  constructor(private router: Router) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((_) => {
      const root = this.router.routerState.snapshot.root;

      this.searchDocument(root);
    });
  }

  getDocument(): Observable<DocumentModel> {
    return this.document.asObservable();
  }

  private searchDocument(route: ActivatedRouteSnapshot) {
    if (route) {
      const document = this.getDocumentInfo(`/${route.url}`);
      if (document) {
        this.document.next(document);
        return;
      }
      if (route.firstChild) {
        this.searchDocument(route.firstChild);
      } else {
        this.document.next(this.getDocumentInfo('/dashboard'));
      }
    }
  }

  private getDocumentInfo(url: string): DocumentModel {
    return this.documents.filter((prod) => prod.url == url)[0];
  }
}
