import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BestSellersComponent } from './bestsellers/bestsellers.component';
import { LinksComponent } from './links/links.component';
import { HttpClientModule } from '@angular/common/http';
import { BestSellersService } from './bestsellers.service';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { BooksearchComponent } from './header/booksearch/booksearch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    LinksComponent,
    BestSellersComponent,
    RecommendationsComponent,
    BooksearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BestSellersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
