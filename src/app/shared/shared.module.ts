import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

// UI modules
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';

// components
import { HeaderComponent } from './component/header/header.component';
import { MainContainerComponent } from './component/main-container/main-container.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { TitleComponent } from './component/title/title.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { DocumentComponent } from './component/document/document.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainContainerComponent,
    SidenavComponent,
    TitleComponent,
    BreadcrumbComponent,
    DocumentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterTestingModule,
    HttpClientModule,

    // UI modules
    FormsModule,
    ReactiveFormsModule,
    RouterTestingModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatChipsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatPaginatorModule,
    MatDialogModule,
    ScrollingModule,
    FlexLayoutModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    // components
    DocumentComponent,

    // modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterTestingModule,

    // UI modules
    FormsModule,
    ReactiveFormsModule,
    RouterTestingModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatChipsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatPaginatorModule,
    MatDialogModule,
    ScrollingModule,
    FlexLayoutModule,
    NgbModalModule,
    MarkdownModule,
  ],
})
export class SharedModule {}
