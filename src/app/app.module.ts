import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { LinksComponent } from './links/links.component';
import { HttpClientModule } from '@angular/common/http';
import { BestsellersService } from './bestsellers.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    RecommendationsComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BestsellersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
