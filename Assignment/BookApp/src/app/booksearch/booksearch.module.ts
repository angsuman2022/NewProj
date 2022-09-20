import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
import { BookSearchComponent } from './booksearch.component';
import { booksearchroutes } from '../routing/booksearchroutes';

@NgModule({
  declarations: [
  
    BookSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(booksearchroutes)
  ],
  providers: [],
  bootstrap: [BookSearchComponent]
})
export class BookSearchModule { }
