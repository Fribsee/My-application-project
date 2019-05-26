import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BestSellersComponent } from './bestsellers/bestsellers.component';
import { LinksComponent } from './links/links.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BestSellersService } from './bestsellers.service';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { BooksearchComponent } from './header/booksearch/booksearch.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';
import { BooksearchService } from './booksearch.service';
import { XML2JsonInterceptorService } from './xml2-json-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    LinksComponent,
    BestSellersComponent,
    RecommendationsComponent,
    BooksearchComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: XML2JsonInterceptorService, multi: true },
     BestSellersService, BooksearchService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
