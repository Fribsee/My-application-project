import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BestSellersComponent } from './bestsellers/bestsellers.component';
import { BestSellersService } from './bestsellers.service';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { BooksearchService } from './booksearch.service';
import { XML2JsonInterceptorService } from './xml2-json-interceptor.service';
import { TitlecasePipe } from './titlecase.pipe';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BestSellersComponent,
    RecommendationsComponent,
    SearchResultsComponent,
    TitlecasePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: XML2JsonInterceptorService, multi: true },
     BestSellersService, BooksearchService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
