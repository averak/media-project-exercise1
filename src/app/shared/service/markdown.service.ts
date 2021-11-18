import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MarkdownService {
  markdown = new BehaviorSubject<string>('');

  constructor(private router: Router) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((_) => {
      const root = this.router.routerState.snapshot.root;

      this.searchMarkdown(root, []);
    });
  }

  getMarkdown(): Observable<string> {
    return this.markdown.asObservable();
  }

  private searchMarkdown(route: ActivatedRouteSnapshot, parentUrl: string[]) {
    if (route) {
      const routeUrl = parentUrl.concat(route.url.map((url) => url.path));

      if (route.firstChild) {
        this.searchMarkdown(route.firstChild, routeUrl);
      } else {
        this.markdown.next(route.data.markdown);
      }
    }

    return '';
  }
}
